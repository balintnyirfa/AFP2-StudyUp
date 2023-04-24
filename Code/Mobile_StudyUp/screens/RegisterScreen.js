import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image, KeyboardAvoidingView, Pressable, TextInput } from 'react-native';
import { auth } from '../Firebase';

const RegisterScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    //const [text, setName] = useState('');
    const [password, setPassword] = useState('');
    // [passwordAgain, setChangePasswordAgain] = useState('');

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential);
          //navigation.navigate(LoginScreen);
        }).catch((error) => {
          console.log(error);
        });
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
                {/*}
                <TextInput
                    style={styles.Input}
                    placeholder="Felhasználó név"
                    value={text}
                    onChangeText={setChangeUserName}
                />*/}
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
                    style={styles.LogoStyle}/>
                <Text style={styles.BottomText}>A StudyUp-ra való regisztrációval elfogadod a Használati feltételeinket és az Adatvédelmi nyilatkozatunkat.</Text>
            </View>
        </SafeAreaView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create ({
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