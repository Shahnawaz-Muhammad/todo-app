// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDED6B-n2e2OptdAj2nyclNsEEjYjUNFg8",
  authDomain: "todo-app-32170.firebaseapp.com",
  projectId: "todo-app-32170",
  storageBucket: "todo-app-32170.appspot.com",
  messagingSenderId: "918392778131",
  appId: "1:918392778131:web:0f2a1f8c4a31c902878c66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)