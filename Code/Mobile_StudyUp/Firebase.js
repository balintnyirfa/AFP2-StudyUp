import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDATBpeUnKBRHxYo1yNCtwxtmPrwWyY3gk",
  authDomain: "studyup-258d0.firebaseapp.com",
  projectId: "studyup-258d0",
  storageBucket: "studyup-258d0.appspot.com",
  messagingSenderId: "169603880209",
  appId: "1:169603880209:web:47ed3fa7bb08cc1b92e8b0",
  measurementId: "G-2C8N82XE7E"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

/*const db = getDatabase();
const reference = ref(db, 'users/' + userId);

set(reference, {
  username: username,
  email: email,
  password: password
});*/ 

// Initialize Firebase
//let app;
//if (firebase.apps.length === 0) {
//  app = firebase.initializeApp(firebaseConfig);
//} else {
//  app = firebase.app()
//}
//
//const auth = firebase.auth()
//
//export { auth };