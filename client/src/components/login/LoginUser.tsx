/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react'
import { ImageBackground, Text, View, Image, TouchableOpacity } from 'react-native'
import styles from '../styles/LoginUser'
import { logoBoardPub, loginBackground, google } from '../../utils/images'
import * as Google from 'expo-google-app-auth'
import firebase from 'firebase'
import { useIsFocused } from '@react-navigation/native'

export default function LoginUser ({ navigation }:any) {
  const isFocused = useIsFocused()
  useEffect(() => {
    checkIfLoggedIn()
  }, [isFocused])
  function checkIfLoggedIn () {
    firebase.auth().onAuthStateChanged((user) => {
      user ? navigation.navigate('application') : navigation.navigate('loginUser')
    })
  }
  function isUserEqual (googleUser:any, firebaseUser:any) {
    if (firebaseUser) {
      const providerData = firebaseUser.providerData
      for (let i = 0; i < providerData.length; i++) {
        if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
            providerData[i].uid === googleUser.getBasicProfile().getId()) {
          // We don't need to reauth the Firebase connection.
          return true
        }
      }
    }
    return false
  }

  function onSignIn (googleUser:any) {
    console.log('Google Auth Response', googleUser)
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    const unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
      unsubscribe()
      // Check if we are already signed-in Firebase with the correct user.
      if (!isUserEqual(googleUser, firebaseUser)) {
        // Build Firebase credential with the Google ID token.
        const credential = firebase.auth.GoogleAuthProvider.credential(
          googleUser.idToken,
          googleUser.accessToken)

        // Sign in with credential from the Google user.
        firebase.auth().signInWithCredential(credential).then(function () {
          console.log('user signed in')
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code
          const errorMessage = error.message
          // The email of the user's account used.
          const email = error.email
          // The firebase.auth.AuthCredential type that was used.
          const credential = error.credential
          // ...
        })
      } else {
        console.log('User already signed-in Firebase.')
      }
    })
  }

  async function signInWithGoogleAsync () {
    try {
      const result = await Google.logInAsync({
        androidClientId: '38128341226-6qhn5lvgpdc984n03acqm8dgmj01dogv.apps.googleusercontent.com',
        scopes: ['profile', 'email']
      })

      if (result.type === 'success') {
        onSignIn(result)
        return result.accessToken
      } else {
        return { cancelled: true }
      }
    } catch (e) {
      return { error: true }
    }
  }

  return (
    <View style={styles.container} testID="loginUser">
      <ImageBackground source={loginBackground()} style={styles.backimage}>
        <View style={styles.shadow}>
          <View style={styles.logo}>
            <Image source={logoBoardPub()} style={styles.image} />
          </View>
          <View style={styles.textSlogan}>
            <Text style={styles.text}>Actualmente tenemos registradas +10.000 promociones de bares, cafeterías y otros locales hosteleros.</Text>
          </View>
          <View style={styles.textAction}>
            <Text style={styles.text}>¡Descúbrelas con BoardPub!</Text>
          </View>
          <View style={styles.user}>
            <TouchableOpacity style={styles.buttonUser} onPress={() => signInWithGoogleAsync()} activeOpacity={0.8}>
                <Image source={google()} style={styles.googleIcon}/>
                <Text style={styles.textUser}>CONTINUAR CON GOOGLE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}
