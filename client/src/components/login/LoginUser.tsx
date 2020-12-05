/* eslint-disable no-use-before-define */
import React from 'react'
import { ImageBackground, Text, View, Image } from 'react-native'
import styles from '../styles/LoginUser'
import { logoBoardPub, loginBackground, google } from '../../utils/images'

export default function LoginUser ():any {
  return (
    <View style={styles.container} testID="login">
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
            <View style={styles.buttonUser}>
                <Image source={google()} style={styles.googleIcon}/>
                <Text style={styles.textUser}>CONTINUAR CON GOOGLE</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}
