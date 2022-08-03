import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0L2HsUhMWDzPyFDAcwW2Nn69eNVjlhBY",
  authDomain: "signal-clone-a4081.firebaseapp.com",
  projectId: "signal-clone-a4081",
  storageBucket: "signal-clone-a4081.appspot.com",
  messagingSenderId: "126491581197",
  appId: "1:126491581197:web:c5da971fdac29b37d26e44",
  measurementId: "G-55RXSX35K5"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { auth, db };
