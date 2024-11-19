import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "kartik-s-blog.firebaseapp.com",
  projectId: "kartik-s-blog",
  storageBucket: "kartik-s-blog.firebasestorage.app",
  messagingSenderId: "1005862571745",
  appId: "1:1005862571745:web:b4cc06b177fb3630a5f1a0"
};


export const app = initializeApp(firebaseConfig);