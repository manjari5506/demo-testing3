// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDV9EHYde5hdDfIn47HZ215_v8VC1o1KI",
  authDomain: "test-1-2c9be.firebaseapp.com",
  projectId: "test-1-2c9be",
  storageBucket: "test-1-2c9be.appspot.com",
  messagingSenderId: "635403737210",
  appId: "1:635403737210:web:386c9c3858c0b7f95403c3"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
