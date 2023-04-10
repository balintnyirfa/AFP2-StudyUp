import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, Image, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.inputTop}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.inputBottom}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity>
          <Pressable style={styles.loginButton}>
            <Text style={styles.loginButtonText}>BEJELENTKEZÉS</Text>
          </Pressable>
        </TouchableOpacity>
        <TouchableOpacity>
          <Pressable style={styles.passwordForgotButton}>
            <Text style={styles.passwordForgotButtonText}>ELFELEJTETTEM A JELSZAVAM</Text>
          </Pressable>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomContainer}>
          <Image 
              source={require('../assets/logo.png')}
              style={styles.logoStyle}/>
          <Text style={styles.bottomText}>A StudyUp-ba való bejelentkezéssel elfogadod a Használati feltételeinket és az Adatvédelmi nyilatkozatunkat.</Text>
      </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff'
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
    backgroundColor: '#E4E4E4',
    borderRadius: 7
  },

  loginButtonText: {
    fontSize: 18,
    color: '#818181',
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