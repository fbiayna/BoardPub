/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React, { useState } from 'react'
import { ImageBackground, Text, View, Image, TouchableOpacity } from 'react-native'
import styles from '../styles/LoginUser'
import { logoBoardPub, loginBackground, google } from '../../utils/images'
import * as Google from 'expo-google-app-auth'
import { connect } from 'react-redux'
import firebase from 'firebase'
import { useIsFocused } from '@react-navigation/native'
import { getUser, addAndGetUser } from '../../actions/userFunctions'
import { LoginReducer } from 'utils/interfaces'

function LoginUser ({ dispatch, navigation }:LoginReducer) {
  const isFocused = useIsFocused()
  if (isFocused) {
    checkIfLoggedIn()
  }

  const [loginState, newLoginState] = useState(true)

  function checkIfLoggedIn () {
    firebase.auth().onAuthStateChanged((firebaseUser:any) => {
      if (firebaseUser) {
        navigation.navigate('application')
      } else {
        navigation.navigate('loginUser')
      }
    })
  }

  function isUserEqual (googleUser:any, firebaseUser:any) {
    if (firebaseUser) {
      const providerData = firebaseUser.providerData
      for (let i = 0; i < providerData.length; i++) {
        if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
            providerData[i].uid === googleUser.getBasicProfile().getId()) {
          return true
        }
      }
    }
    return false
  }

  function onSignIn (googleUser:any) {
    const unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
      unsubscribe()
      if (!isUserEqual(googleUser, firebaseUser)) {
        const credential = firebase.auth.GoogleAuthProvider.credential(
          googleUser.idToken,
          googleUser.accessToken)
        firebase.auth().signInWithCredential(credential).then((result) => {
          if (result.additionalUserInfo?.isNewUser) {
            dispatch(addAndGetUser(result.additionalUserInfo?.profile))
          } else {
            const { additionalUserInfo: { profile: { sub } } }:any = result
            dispatch(getUser(sub))
          }
        }

        ).catch((error) => {
          newLoginState(true)
          const errorCode = error.code
          const errorMessage = error.message
          const email = error.email
          const credential = error.credential
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
        newLoginState(true)
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
          {!loginState
            ? <><View style={styles.logo}>
                  <Image source={logoBoardPub()} style={styles.image} />
                </View>
                <View style={styles.textLoadingContainer}>
                  <Text style={styles.textLoading}>Espera unos segundos, estamos preparando la mesa...</Text>
                </View>
            </>
            : <>
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
                  <TouchableOpacity style={styles.buttonUser} onPress={() => signInWithGoogleAsync() && newLoginState(false)} activeOpacity={0.8}>
                      <Image source={google()} style={styles.googleIcon}/>
                      <Text style={styles.textUser}>CONTINUAR CON GOOGLE</Text>
                  </TouchableOpacity>
                </View>
              </>
          }
        </View>
      </ImageBackground>
    </View>
  )
}

function mapStateToProps ({ loginReducer }: any) {
  return {
    user: loginReducer.user,
    userState: loginReducer.userState
  }
}
export default connect(mapStateToProps)(LoginUser)
