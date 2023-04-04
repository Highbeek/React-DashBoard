// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCid9C8ml16Vjszf4sEyUibwclF5z8yuC4",
  authDomain: "finidash-b4ac0.firebaseapp.com",
  projectId: "finidash-b4ac0",
  storageBucket: "finidash-b4ac0.appspot.com",
  messagingSenderId: "383971019322",
  appId: "1:383971019322:web:5172655045c1702fb88303",
  measurementId: "G-868GQS8QE7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();


export default app;