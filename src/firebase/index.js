import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCRnaZKTKMiGh3Nls3EXyDwN6mXBw6rL5k",
  authDomain: "test-60ac5.firebaseapp.com",
  projectId: "test-60ac5",
  storageBucket: "test-60ac5.appspot.com",
  messagingSenderId: "1094290549431",
  appId: "1:1094290549431:web:c2ca2614a9b2984bdabb32",
  measurementId: "G-827V95PQC5",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

const db = getFirestore(app);

export { db, auth };
