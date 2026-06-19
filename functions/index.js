"use strict";

const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { initializeApp } = require("firebase-admin/app");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");

initializeApp();

const db = getFirestore();

const GAME_ID_LIST = [
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
  "hoopsduel",
  "freethrow",
  "baseball",
  "rallyrush",
  "trafficrush",
  "archeryrange",
  "arrowstorm",
  "doodleroad",
  "wordflux",
  "bubblecannon",
  "lockpick",
];

const GAME_IDS = new Set(GAME_ID_LIST);

const MODE_NAMES = new Set(["Solo", "Daily Challenge", "Tournament", "Friend Challenge", "bot", "local"]);
const ANALYTIC_EVENTS = new Set(["game_start", "run_complete", "screen_view", "daily_loaded", "shop_action", "friend_action"]);
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

function cleanReportText(value, maxLength) {
  return String(value || "")
    .replace(/[<>]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

function validateReportPayload(data) {
  const type = cleanReportText(data?.type || "Bug", 32) || "Bug";
  const area = cleanReportText(data?.area || "General", 60) || "General";
  const message = cleanReportText(data?.message, 360);
  const screen = cleanReportText(data?.screen || "unknown", 32) || "unknown";
  const userAgent = cleanReportText(data?.userAgent || "", 180);

  if (message.length < 6) {
    throw new HttpsError("invalid-argument", "Report message is too short.");
  }

  return { type, area, message, screen, userAgent };
}

function todayKey(date = new Date()) {
  return date.toISOString().slice(0, 10);
}

function dailySeed(key = todayKey()) {
  return key.split("").reduce((sum, char, index) => sum + char.charCodeAt(0) * (index + 17), 0);
}

function buildDailyChallenge(key = todayKey()) {
  const seed = dailySeed(key);
  const gameId = GAME_ID_LIST[seed % GAME_ID_LIST.length];
  const useTime = seed % 3 === 0;
  const scoreTarget = 500 + (seed % 7) * 85;
  const timeTarget = 32 + (seed % 5) * 6;
  const target = useTime ? timeTarget : scoreTarget;
  return {
    key,
    gameId,
    type: useTime ? "time" : "score",
    target,
    label: useTime ? `Survive ${target}s` : `Score ${target}`,
    source: "cloud",
  };
}

function cleanAnalyticsPayload(data) {
  const event = String(data?.event || "").slice(0, 40);
  if (!ANALYTIC_EVENTS.has(event)) {
    throw new HttpsError("invalid-argument", "Unknown analytics event.");
  }

  const gameId = String(data?.gameId || "").slice(0, 32);
  if (gameId && !GAME_IDS.has(gameId)) {
    throw new HttpsError("invalid-argument", "Unknown game.");
  }

  return {
    event,
    gameId,
    screen: cleanReportText(data?.screen || "", 32),
    mode: cleanReportText(data?.mode || "", 32),
    score: Math.max(0, Math.min(250000, Math.floor(Number(data?.score) || 0))),
    time: Math.max(0, Math.min(60.5, Number(data?.time) || 0)),
    playLevel: Math.max(1, Math.min(3, Math.floor(Number(data?.playLevel) || 1))),
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

exports.getDailyChallenge = onCall({ region: "us-central1" }, async () => {
  const key = todayKey();
  const dailyRef = db.collection("dailyChallenges").doc(key);
  const snapshot = await dailyRef.get();

  if (snapshot.exists) {
    const daily = snapshot.data();
    return {
      key,
      gameId: GAME_IDS.has(daily.gameId) ? daily.gameId : buildDailyChallenge(key).gameId,
      type: daily.type === "time" ? "time" : "score",
      target: Math.max(1, Math.floor(Number(daily.target) || 500)),
      label: cleanReportText(daily.label || "", 40) || buildDailyChallenge(key).label,
      source: "cloud",
    };
  }

  const daily = buildDailyChallenge(key);
  await dailyRef.set({
    ...daily,
    createdAt: FieldValue.serverTimestamp(),
  });
  return daily;
});

exports.trackEvent = onCall({ region: "us-central1" }, async (request) => {
  if (!request.auth?.uid) {
    throw new HttpsError("unauthenticated", "Sign in is required to record events.");
  }

  const event = cleanAnalyticsPayload(request.data);
  const key = todayKey();
  await db.collection("analyticsDays").doc(key).collection("events").add({
    ...event,
    uid: request.auth.uid,
    createdAt: FieldValue.serverTimestamp(),
  });
  await db.collection("analyticsTotals").doc(event.event).set({
    count: FieldValue.increment(1),
    updatedAt: FieldValue.serverTimestamp(),
  }, { merge: true });

  return { accepted: true };
});

exports.reportIssue = onCall({ region: "us-central1" }, async (request) => {
  if (!request.auth?.uid) {
    throw new HttpsError("unauthenticated", "Sign in is required to submit reports.");
  }

  const report = validateReportPayload(request.data);
  await enforceRateLimit(`report-${request.auth.uid}`);

  const reportRef = await db.collection("issueReports").add({
    ...report,
    uid: request.auth.uid,
    status: "new",
    createdAt: FieldValue.serverTimestamp(),
  });

  return { id: reportRef.id, accepted: true };
});
