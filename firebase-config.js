import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  limit,
  orderBy,
  query,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDL7nTv6QEE_yvLaGM1oQqkdME2UP-xDHE",
  authDomain: "locacaoforms.firebaseapp.com",
  projectId: "locacaoforms",
  storageBucket: "locacaoforms.firebasestorage.app",
  messagingSenderId: "674512871719",
  appId: "1:674512871719:web:8aa17d916418cc517bc902",
  measurementId: "G-XH9QGCH11Z"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
  addDoc,
  auth,
  collection,
  db,
  getDocs,
  limit,
  onAuthStateChanged,
  orderBy,
  query,
  serverTimestamp,
  signInWithEmailAndPassword,
  signOut
};
