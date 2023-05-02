import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDATBpeUnKBRHxYo1yNCtwxtmPrwWyY3gk",
  authDomain: "studyup-258d0.firebaseapp.com",
  databaseURL: "https://studyup-258d0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "studyup-258d0",
  storageBucket: "studyup-258d0.appspot.com",
  messagingSenderId: "169603880209",
  appId: "1:169603880209:web:47ed3fa7bb08cc1b92e8b0",
  measurementId: "G-2C8N82XE7E"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

//db.settings({timestampInSnapshots: true});

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDATBpeUnKBRHxYo1yNCtwxtmPrwWyY3gk",
  authDomain: "studyup-258d0.firebaseapp.com",
  databaseURL: "https://studyup-258d0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "studyup-258d0",
  storageBucket: "studyup-258d0.appspot.com",
  messagingSenderId: "169603880209",
  appId: "1:169603880209:web:47ed3fa7bb08cc1b92e8b0",
  measurementId: "G-2C8N82XE7E"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

//db.settings({timestampInSnapshots: true});

/* const database = firebase.firestore();
database.settings({ timestampsInSnapshots : true }); */

/*
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth } 
*/
