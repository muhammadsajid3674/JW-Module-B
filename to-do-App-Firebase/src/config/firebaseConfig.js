// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxG9iIm9ZBlQo2Nb_Vn2t0inMziRKhKhw",
  authDomain: "to-do-app-da290.firebaseapp.com",
  projectId: "to-do-app-da290",
  storageBucket: "to-do-app-da290.appspot.com",
  messagingSenderId: "724890733788",
  appId: "1:724890733788:web:e748a94dad07ef6bea7819",
  measurementId: "G-44XF58J5Z8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const dataBase = getFirestore(app)

export {app, dataBase};