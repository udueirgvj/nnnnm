// js/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB6NgRD22IG5l2qQ0O-299N1fOjTPNcVF8",
  authDomain: "tbbbbt-90f6e.firebaseapp.com",
  projectId: "tbbbbt-90f6e",
  storageBucket: "tbbbbt-90f6e.firebasestorage.app",
  messagingSenderId: "65865503138",
  appId: "1:65865503138:web:0ed5179a8753fad82322fb",
  measurementId: "G-1R49BFWK7V"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
