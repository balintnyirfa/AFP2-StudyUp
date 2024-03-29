import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image, KeyboardAvoidingView, Pressable, TextInput, Alert } from 'react-native';
import { auth, db } from '../Firebase';
import { useNavigation } from '@react-navigation/native';
import { getFirestore, doc, addDoc, collection, setDoc } from "firebase/firestore";
import firebase from "firebase/compat/app";

const RegisterScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [points, setPoints] = useState(0);
    const [profilePic, setProfilePic] = useState(null);
    const [numberCurriculumDone, setNumberCurriculumDone] = useState(0);
    const navigation = useNavigation();

    
    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
                const newUser = {
                    uID: userCredential.uID,
                    email: userCredential.email,
                    //username: userCredential.username
                };
                addDoc(doc(db, "user"), newUser);
                navigation.navigate("Login");
            }).catch((error) => {
                console.log(error);
                //AlertWindow(error);
            });
        
        /*
        const uid = firebase.auth().currentUser.uid;

        // Új dokumentum létrehozása
        db.collection('users').doc(uid).set({
            username: username,
            email: email,
            points: points,
            profilePic: profilePic.uri,
            numberCurriculumDone: numberCurriculumDone
        })
        .then(() => {
            console.log('Felhasználó dokumentum sikeresen létrehozva');
        })
        .catch((error) => {
            console.error('Hiba történt a dokumentum létrehozása során:', error);
        });
        */
    }

    const AlertWindow = (error) => {
        Alert.alert("Hiba", error, [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            {
                text: 'OK',
                onPress: () => console.log('OK Pressed'),
            },
        ]);
    }

    return (
        <SafeAreaView style={styles.Container}>
            <View style={styles.InputContainer}>
                <TextInput
                    style={styles.InputTop}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    onChange={(e) => setEmail(e.target.value)}
                />
                
                <TextInput
                    style={styles.Input}
                    placeholder="Felhasználó név"
                    value={username}
                    onChangeText={setUsername}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <TextInput
                    style={styles.Input}
                    placeholder="Jelszó"
                    value={password}
                    onChangeText={setPassword}
                    onChange={(e) => setPassword(e.target.value)}
                    secureTextEntry
                />
                {/*}
                <TextInput
                    style={styles.InputBottom}
                    placeholder="Jelszó újra"
                    value={passwordAgain}
                    onChangeText={setChangePasswordAgain}
                    secureTextEntry
                />*/}
            </View>

            <View style={styles.ButtonContainer}>
                <TouchableOpacity>
                    <Pressable style={styles.RegisterButton} onPress={signUp}>
                        <Text style={styles.RegisterButtonText}>REGISZTRÁCIÓ</Text>
                    </Pressable>
                    <Pressable style={styles.LoginButton} onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.LoginButtonText}>MÁR VAN PROFILOM</Text>
                    </Pressable>
                </TouchableOpacity>
            </View>

            <View style={styles.BottomContainer}>
                <Image
                    source={require('../assets/logo.png')}
                    style={styles.LogoStyle} />
                <Text style={styles.BottomText}>A StudyUp-ra való regisztrációval elfogadod a Használati feltételeinket és az Adatvédelmi nyilatkozatunkat.</Text>
            </View>
        </SafeAreaView>
    )
}

const validateInputs = () => {
    if (email.trim() === '') {
      Alert.alert('Error', 'Email cannot be empty.');
      return false;
    }
    if(username.trim() === ''){
        Alert.alert('Error', 'Username cannot be empty.');
        return false;
    }
    if(password.trim() === ''){
        Alert.alert('Error', 'Password cannot be empty.')
        return false;
    }

    return true;
};

export default RegisterScreen

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#fff'
    },

    InputContainer: {
        //height: 500,
        margin: 15,
        width: 350,
        //flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: '#F5F5F5',
        borderWidth: 1,
        borderColor: '#C9C9C9',
        borderRadius: 7
    },

    Input: {
        borderWidth: 1,
        //borderTopWidth: 1,
        //borderBottomWidth: 1,
        borderColor: '#C9C9C9',
        //borderRadius: 7,
        padding: 13,
        fontSize: 17,
        color: '#BBBBBB'
    },

    InputTop: {
        borderWidth: 1,
        borderColor: '#C9C9C9',
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
        padding: 13,
        fontSize: 17,
        color: '#BBBBBB'
    },

    InputBottom: {
        borderWidth: 1,
        borderColor: '#C9C9C9',
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7,
        padding: 13,
        fontSize: 17,
        color: '#BBBBBB'
    },

    ButtonContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto'
    },

    RegisterButton: {
        width: 350,
        margin: 4,
        padding: 13,
        backgroundColor: '#E4E4E4',
        borderRadius: 7
    },

    RegisterButtonText: {
        fontSize: 18,
        color: '#818181',
        marginLeft: 'auto',
        marginRight: 'auto'
    },

    LoginButton: {
        width: 350,
        margin: 4,
        padding: 13,
        backgroundColor: '#8562AC',
        borderRadius: 7
    },

    LoginButtonText: {
        fontSize: 18,
        color: '#FFFFFF',
        marginLeft: 'auto',
        marginRight: 'auto'
    },

    BottomContainer: {
        marginBottom: 20,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },

    LogoStyle: {
        width: 150,
        height: 150,
        marginLeft: 'auto',
        marginRight: 'auto'
    },

    BottomText: {
        width: 350,
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: '#6D6D6D'
    }
})
