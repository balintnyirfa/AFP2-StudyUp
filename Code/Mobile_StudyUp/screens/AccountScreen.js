import React, { useState } from 'react';
import { KeyboardAvoidingView, Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View, Button } from 'react-native';

const AccountScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [points, setPoints] = useState(0);
  const [profilePic, setProfilePic] = useState('');
  const [numberCurriculumDone, setNumberCurriculumDone] = useState(0);

  const handleSave = () => {
    console.log(`Username: ${username}, Email: ${email}, Points: ${points}, Profile Pic: ${profilePic}`);
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
    <View style={styles.inputContainer}>
      <Text style={{ fontSize: 20, marginBottom: 70, color: '#8562AC', fontWeight: 500 }}>Felhasználói fiók</Text>
      <View style={{ alignItems: 'center', marginBottom: 10 }}>
        <Image
          style={{ width: 100, height: 100, borderRadius: 50 }}
          source={{ uri: profilePic }}
        />
        <View style={styles.ButtonContainer}>
        <Pressable style={styles.loginButton}>
            <Text style={styles.loginButtonText} onPress={() => alert("Kép feltöltése")}>Válassz profilképet!</Text>
        </Pressable>
        </View>
      </View>

      <TextInput
        style={styles.inputTop}
        onChangeText={setUsername}
        value={username}
        placeholder="Username"
      />

      <TextInput
        style={styles.inputTop}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        
      />
      
      <Text style={styles.inputTop}>Pontok: {points}</Text>
      <Text style={styles.inputTop} marginBottom={10} >Kitöltött tesztek száma: {points}</Text>

      <View style={styles.buttonContainer}>
      <Pressable style={styles.loginButton} >
        <Text style={styles.loginButtonText} onPress={handleSave}>Mentés</Text>
      </Pressable>
      </View>

    </View>
    </KeyboardAvoidingView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
      marginTop: 10
    },
  
    inputContainer: {
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
  
    inputTop: {
      borderWidth: 1,
      borderColor: '#C9C9C9',
      borderTopLeftRadius: 7,
      borderTopRightRadius: 7,
      padding: 13,
      fontSize: 17,
      color: '#BBBBBB'
    },
  
    inputBottom: {
      borderWidth: 1,
      borderColor: '#C9C9C9',
      borderBottomLeftRadius: 7,
      borderBottomRightRadius: 7,
      padding: 13,
      fontSize: 17,
      color: '#BBBBBB'
    },
  
    buttonContainer: {
      flexDirection: 'column',
      justifyContent: 'center',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
  
    loginButton: {
        width: 350,
        margin: 4,
        padding: 13,
        backgroundColor: '#8562AC',
        borderRadius: 7
    },
  
    loginButtonText: {
        fontSize: 18,
        color: '#FFFFFF',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
  
    passwordForgotButton: {
      width: 350,
      margin: 4,
      padding: 13,
      //backgroundColor: '#E4E4E4',
      //borderRadius: 7
    },
  
    passwordForgotButtonText: {
      fontSize: 18,
      color: '#8562AC',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
  
    bottomContainer: {
      marginBottom: 20,
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-end'
    },
  
    logoStyle: {
      width: 150,
      height: 150,
      marginLeft: 'auto',
      marginRight: 'auto'
    },
  
    bottomText: {
      width: 350,
      textAlign: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      color: '#6D6D6D'
    }
  })