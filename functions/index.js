"use strict";

const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { initializeApp } = require("firebase-admin/app");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");

initializeApp();

const db = getFirestore();

const GAME_IDS = new Set([
  "dodger",
  "popper",
  "runner",
  "flap",
  "tictactoe",
  "tetris",
  "twenty48",
  "driftboss",
  "beatfoundry",
  "snake",
  "breaker",
  "pinball",
  "river",
  "keeper",
  "memory",
  "asteroids",
  "lunar",
  "repair",
  "cipher",
  "orbitguard",
]);

const MODE_NAMES = new Set(["Solo", "Daily Challenge", "Tournament", "bot", "local"]);
const MAX_SCORE_BY_GAME = {
  tictactoe: 8000,
  twenty48: 250000,
  tetris: 250000,
  default: 120000,
};

function cleanPlayerName(value) {
  return String(value || "Player")
    .replace(/[^\w .-]/g, "")
    .trim()
    .slice(0, 24) || "Player";
}

function validateScorePayload(data) {
  const gameId = String(data?.gameId || "");
  const score = Math.floor(Number(data?.score));
  const time = Number(data?.time);
  const mode = String(data?.mode || "Solo").slice(0, 32);
  const maxScore = MAX_SCORE_BY_GAME[gameId] || MAX_SCORE_BY_GAME.default;

  if (!GAME_IDS.has(gameId)) {
    throw new HttpsError("invalid-argument", "Unknown game.");
  }

  if (!Number.isFinite(score) || score < 0 || score > maxScore) {
    throw new HttpsError("invalid-argument", "Score is outside the allowed range.");
  }

  if (!Number.isFinite(time) || time < 0 || time > 60.5) {
    throw new HttpsError("invalid-argument", "Run time is outside the allowed range.");
  }

  if (!MODE_NAMES.has(mode)) {
    throw new HttpsError("invalid-argument", "Unknown run mode.");
  }

  return {
    gameId,
    score,
    time: Math.min(60, Math.max(0, time)),
    mode,
    player: cleanPlayerName(data?.player),
  };
}

async function enforceRateLimit(uid) {
  const limitRef = db.collection("scoreRateLimits").doc(uid);
  const now = Date.now();

  await db.runTransaction(async (transaction) => {
    const snapshot = await transaction.get(limitRef);
    const lastSubmitAt = snapshot.exists ? Number(snapshot.data().lastSubmitAt || 0) : 0;

    if (now - lastSubmitAt < 5000) {
      throw new HttpsError("resource-exhausted", "Please wait a few seconds before submitting another score.");
    }

    transaction.set(limitRef, {
      lastSubmitAt: now,
      updatedAt: FieldValue.serverTimestamp(),
    });
  });
}

exports.submitScore = onCall({ region: "us-central1" }, async (request) => {
  if (!request.auth?.uid) {
    throw new HttpsError("unauthenticated", "Sign in is required to submit scores.");
  }

  const entry = validateScorePayload(request.data);
  await enforceRateLimit(request.auth.uid);

  const scoreRef = await db.collection("leaderboards").doc(entry.gameId).collection("scores").add({
    ...entry,
    uid: request.auth.uid,
    createdAt: FieldValue.serverTimestamp(),
  });

  return {
    id: scoreRef.id,
    accepted: true,
    entry: {
      gameId: entry.gameId,
      score: entry.score,
      time: entry.time,
      mode: entry.mode,
      player: entry.player,
    },
  };
});
