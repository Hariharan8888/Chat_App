import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyCWUc8nWV4IV_uDQ_C6Yvs4ybCEBAG6NLQ",
  authDomain: "chat-625e9.firebaseapp.com",
  projectId: "chat-625e9",
  storageBucket: "chat-625e9.appspot.com",
  messagingSenderId: "342789889376",
  appId: "1:342789889376:web:528d38be77012bb8c79205"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();