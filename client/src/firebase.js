// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "rentbuddy-eeb43.firebaseapp.com",
  projectId: "rentbuddy-eeb43",
  storageBucket: "rentbuddy-eeb43.appspot.com",
  messagingSenderId: "542931224195",
  appId: "1:542931224195:web:40f6bae12a37fcf5fa7db6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);