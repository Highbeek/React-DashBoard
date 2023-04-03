import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCid9C8ml16Vjszf4sEyUibwclF5z8yuC4",
  authDomain: "finidash-b4ac0.firebaseapp.com",
  projectId: "finidash-b4ac0",
  storageBucket: "finidash-b4ac0.appspot.com",
  messagingSenderId: "383971019322",
  appId: "1:383971019322:web:5172655045c1702fb88303",
  measurementId: "G-868GQS8QE7",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
