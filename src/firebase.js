import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBi_YeAGKl52nZ-L1_5noyj__2DxWmIlEo",
  authDomain: "clone-c002b.firebaseapp.com",
  projectId: "clone-c002b",
  storageBucket: "clone-c002b.appspot.com",
  messagingSenderId: "234088740060",
  appId: "1:234088740060:web:71c89f44e2e3e10523f019",
  measurementId: "G-6P8DT0EG07",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
