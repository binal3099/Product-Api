// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDzv3ycgTDrbpR5cmdQW36Gn9k1BFeun14",
    authDomain: "react-firebase-14ae5.firebaseapp.com",
    projectId: "react-firebase-14ae5",
    storageBucket: "react-firebase-14ae5.appspot.com",
    messagingSenderId: "649744168758",
    appId: "1:649744168758:web:154d8f19cc9262b25c6597"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);

export default auth;