import { Text, StyleSheet, View } from 'react-native';
import React, { Component } from 'react';
import { auth, db } from '../Firebase';
import firebase from 'firebase/app';
import { doc, getDoc } from 'firebase/firestore';

const SubjectsScreen = () => {
    //db.collection('subjects').getDoc().then((snapshot) => {
    //    console.log(snapshot);
    //})

    //const docRef = doc(db, "subjects");
    //const docSnap = getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
    } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
    }
}

const styles = StyleSheet.create({})

export default SubjectsScreen