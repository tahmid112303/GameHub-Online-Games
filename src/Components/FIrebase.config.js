// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBafvnQkmocry321teXfszg7NyU6rrAUbI",
  authDomain: "gamehub-ed794.firebaseapp.com",
  projectId: "gamehub-ed794",
  storageBucket: "gamehub-ed794.firebasestorage.app",
  messagingSenderId: "684421118778",
  appId: "1:684421118778:web:8b09c45ee7d38d48aa2e03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)