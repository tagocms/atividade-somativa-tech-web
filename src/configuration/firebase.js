import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
import "firebase/firestore";
import { collection, initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJHlg_rK-9JcZxN4g0Qm99nzZ3P5GZILw",
  authDomain: "tech-web-af6.firebaseapp.com",
  projectId: "tech-web-af6",
  storageBucket: "tech-web-af6.firebasestorage.app",
  messagingSenderId: "556268186267",
  appId: "1:556268186267:web:6be56cc532f7d825e9343e"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = initializeAuth(firebaseApp);
export const firebaseFirestore = initializeFirestore(firebaseApp, {});
export const usersCollectionReference = collection(firebaseFirestore, "users");