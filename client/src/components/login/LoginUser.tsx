/* eslint-disable no-use-before-define */
import React from 'react'
import { ImageBackground, Text, View, Image, TouchableOpacity } from 'react-native'
import styles from '../styles/LoginUser'
import { logoBoardPub, loginBackground, google } from '../../utils/images'
import * as Google from 'expo-google-app-auth'

export default function LoginUser () {
  async function signInWithGoogleAsync () {
    try {
      const result = await Google.logInAsync({
        androidClientId: '38128341226-6qhn5lvgpdc984n03acqm8dgmj01dogv.apps.googleusercontent.com',
        scopes: ['profile', 'email']
      })

      if (result.type === 'success') {
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
