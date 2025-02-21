// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALwhrUHp5Koo9E5o9JApI39of7nZLWS80",
  authDomain: "a100-2774d.firebaseapp.com",
  projectId: "a100-2774d",
  storageBucket: "a100-2774d.firebasestorage.app",
  messagingSenderId: "833636757424",
  appId: "1:833636757424:web:b3bc45c2739932750ff075",
  measurementId: "G-NTD6Y5TEW3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);