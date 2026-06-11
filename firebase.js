import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signInAnonymously } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  limit,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";
import { getFunctions, httpsCallable } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-functions.js";

const firebaseConfig = {
  apiKey: "AIzaSyBcfqFQ3YqeBFPx94TFB5qewivxWdFUXQQ",
  authDomain: "cool-arcade.firebaseapp.com",
  projectId: "cool-arcade",
  storageBucket: "cool-arcade.firebasestorage.app",
  messagingSenderId: "322699908108",
  appId: "1:322699908108:web:05159857c75f1560708a29",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);
const submitScore = httpsCallable(functions, "submitScore");

let currentUser = null;
let resolveReady = null;

const ready = new Promise((resolve) => {
  resolveReady = resolve;
  onAuthStateChanged(auth, (user) => {
    currentUser = user;
    document.documentElement.dataset.cloudStatus = user ? "signed-in" : "signed-out";
    resolve(user);
  });
});

const cloudApi = {
  ready,
  saveScore,
  getScores,
  saveProfile,
  loadProfile,
  registerFriendCode,
  findFriend,
  getUserId: () => currentUser?.uid || null,
};

globalThis.arcadeCloud = cloudApi;
window.arcadeCloud = cloudApi;
window.dispatchEvent(new Event("arcade-cloud-ready"));
document.documentElement.dataset.cloudStatus = "loading";

signInAnonymously(auth).catch((error) => {
  console.warn("Firebase anonymous sign-in failed. Local saves still work.", error);
  document.documentElement.dataset.cloudStatus = "auth-missing";
  resolveReady?.(null);
});

async function saveScore(result) {
  await ready;
  if (!currentUser || !result?.gameId) return null;
  return submitScore({
    gameId: result.gameId,
    player: String(result.player || "Player").slice(0, 24),
    score: Math.floor(Number(result.score) || 0),
    time: Math.min(60, Math.max(0, Number(result.time) || 0)),
    mode: result.mode || "Solo",
  });
}

async function getScores(gameId, count = 5) {
  await ready;
  const scoreQuery = query(
    collection(db, "leaderboards", gameId, "scores"),
    orderBy("score", "desc"),
    limit(count),
  );
  const snapshot = await getDocs(scoreQuery);
  return snapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      player: data.player || "Player",
      score: Math.floor(Number(data.score) || 0),
      time: Math.min(60, Math.max(0, Number(data.time) || 0)),
      mode: data.mode || "Solo",
      cloud: true,
    };
  });
}

async function saveProfile(progress) {
  await ready;
  if (!currentUser) return null;
  const profileRef = doc(db, "profiles", currentUser.uid);
  await setDoc(
    profileRef,
    {
      ...progress,
      uid: currentUser.uid,
      updatedAt: serverTimestamp(),
    },
    { merge: true },
  );
  return { saved: true, uid: currentUser.uid };
}

async function loadProfile() {
  await ready;
  if (!currentUser) return null;
  const profileRef = doc(db, "profiles", currentUser.uid);
  const snapshot = await getDoc(profileRef);
  return snapshot.exists() ? snapshot.data() : null;
}

async function registerFriendCode(publicProfile) {
  await ready;
  if (!currentUser || !publicProfile?.code) return null;
  const codeRef = doc(db, "friendCodes", String(publicProfile.code).toUpperCase());
  await setDoc(
    codeRef,
    {
      ...publicProfile,
      uid: currentUser.uid,
      updatedAt: serverTimestamp(),
    },
    { merge: true },
  );
  return { registered: true, code: publicProfile.code };
}

async function findFriend(code) {
  await ready;
  const cleanedCode = String(code || "").toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 10);
  if (!cleanedCode) return null;
  const codeRef = doc(db, "friendCodes", cleanedCode);
  const snapshot = await getDoc(codeRef);
  if (!snapshot.exists()) return null;
  const data = snapshot.data();
  return {
    code: cleanedCode,
    name: data.name || "Friend",
    avatar: data.avatar || "P2",
    level: Math.max(1, Math.floor(Number(data.level) || 1)),
    totalBest: Math.max(0, Math.floor(Number(data.totalBest) || 0)),
    favorite: data.favorite || "None",
  };
}
