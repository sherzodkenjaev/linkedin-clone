import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBtFfkjdD2Gozl-2I5X0sTyYjiXR0gx72s",
    authDomain: "linkedin-clone-907ac.firebaseapp.com",
    projectId: "linkedin-clone-907ac",
    storageBucket: "linkedin-clone-907ac.appspot.com",
    messagingSenderId: "1098169805096",
    appId: "1:1098169805096:web:8d97b7dcc1f41f7a2e881d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };