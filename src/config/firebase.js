import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCdjwwg6Y5BnuEeM4ojnIf5JjxGtPHCVuM",
  authDomain: "medical-be70f.firebaseapp.com",
  projectId: "medical-be70f",
  storageBucket: "medical-be70f.firebasestorage.app",
  messagingSenderId: "430214748521",
  appId: "1:430214748521:web:ec4c2508bf66718df985f8",
  measurementId: "G-KFMKCB5DWY"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);