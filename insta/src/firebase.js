import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCn1poMH6u_lxIUFLTsbVvKAKAcKHh-zbI",
  authDomain: "instagram-clone-eb296.firebaseapp.com",
  projectId: "instagram-clone-eb296",
  storageBucket: "instagram-clone-eb296.appspot.com",
  messagingSenderId: "63652345694",
  appId: "1:63652345694:web:aa8e171c8b1541c1e001cf",
  measurementId: "G-0PKEZ5R18K",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
