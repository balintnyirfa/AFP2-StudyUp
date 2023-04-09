// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDATBpeUnKBRHxYo1yNCtwxtmPrwWyY3gk",
  authDomain: "studyup-258d0.firebaseapp.com",
  projectId: "studyup-258d0",
  storageBucket: "studyup-258d0.appspot.com",
  messagingSenderId: "169603880209",
  appId: "1:169603880209:web:47ed3fa7bb08cc1b92e8b0",
  measurementId: "G-2C8N82XE7E"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };