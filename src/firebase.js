// Import Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3qlg6eYunnR-ANw3P8rB0ZfSyHmz2wGA",
  authDomain: "ianh-portfolio.firebaseapp.com",
  projectId: "ianh-portfolio",
  storageBucket: "ianh-portfolio.firebasestorage.app",
  messagingSenderId: "434412429034",
  appId: "1:434412429034:web:3a511b1c8a655650dbc193",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
