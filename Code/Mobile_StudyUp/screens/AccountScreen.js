import React, { useState } from 'react';
import { KeyboardAvoidingView, Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View, Button, Platform} from 'react-native';
import * as ImagePicker from 'expo-image-picker'

const AccountScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [points, setPoints] = useState(0);
  const [profilePic, setProfilePic] = useState(null);
  const [numberCurriculumDone, setNumberCurriculumDone] = useState(0);

  const handleSave = () => {
    console.log(`Username: ${username}, Email: ${email}, Points: ${points}, Profile Pic: ${profilePic}`);
  };

  const handlePickImage = async () => {
    // engedély galériához
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Szükséges az engedély megadása, hogy képet feltölthess!');
        return;
      }
    }
  
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setProfilePic(result.uri);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
    <View style={styles.inputContainer}>
      <Text style={{ fontSize: 20, marginBottom: 30, color: '#8562AC', fontWeight: 500 }}>Felhasználói fiók</Text>
      <View style={{ alignItems: 'center', marginBottom: 10 }}>
        <Image
          style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 20 }}
          source={{ uri: profilePic }}
        />
        <View style={styles.ButtonContainer}>
        <Pressable style={styles.uploadButton}>
        {profilePic && <Image source={{ uri: profilePic }} />}
        <Text style={styles.btnText}  onPress={handlePickImage}>
              Profilkép feltöltése
          </Text>
        </Pressable>
        </View>
      </View>

      <Text style={styles.inputTop}><b>Felhasználónév:</b> -insert username-{username}</Text>
      <Text style={styles.inputTop}><b>Email cím:</b> -insert email-{email}</Text>
      <Text style={styles.inputTop}><b>Pontok:</b> {points}</Text>
      <Text style={styles.inputTop} marginBottom={10} ><b>Kitöltött tesztek száma:</b> {points}</Text>

      <View style={styles.buttonContainer}>
      <Pressable style={styles.saveButton} >
        <Text style={styles.btnText} onPress={handleSave}>Mentés</Text>
      </Pressable>
      </View>

    </View>
    </KeyboardAvoidingView>
  );
}
;

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
      textAlign: 'center',
      borderTopLeftRadius: 7,
      borderTopRightRadius: 7,
      padding: 13,
      fontSize: 17,
      color: '#5E5E5E',
      
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

    saveButton: {
      width: 350,
      marginBottom: 4,
      marginTop: 4,
      padding: 13,
      backgroundColor: '#8562AC',
      color: '#8562AC',
      borderRadius: 7,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
  },

    uploadButton: {
        width: 200,
        backgroundColor: '#8562AC',
        borderRadius: 7,
        textAlign: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4
    },
  
    btnText: {
        fontSize: 16,
        marginLeft: 'auto',
        marginRight: 'auto',
        color: '#FFFFFF'
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
