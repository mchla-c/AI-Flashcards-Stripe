// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_PROJECT_ID + ".firebaseapp.com",
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_PROJECT_ID + ".appspot.com",
  messagingSenderId: FIREBASE_SENDER_ID,
  appId: FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;