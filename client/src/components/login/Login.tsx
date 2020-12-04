/* eslint-disable no-use-before-define */
import React from 'react'
import { ImageBackground, Text, View, Image } from 'react-native'
import styles from '../styles/Login'
import { logoBoardPub, loginBackground } from '../../utils/images'

export default function Login ():any {
  return (
    <View style={styles.container} testID="login">
      <ImageBackground source={loginBackground()} style={styles.backimage}>
        <View style={styles.shadow}>
          <View style={styles.logo}>
            <Image source={logoBoardPub()} style={styles.image} />
          </View>
          <View style={styles.textSlogan}>
            <Text style={styles.text}>Las mejores promociones de tus locales hosteleros, en una sola app.</Text>
          </View>
          <View style={styles.textAction}>
            <Text style={styles.text}>¿Qué estás buscando?</Text>
          </View>
          <View style={styles.user}>
            <View style={styles.buttonUser}>
              <Text style={styles.textUser}>¡HE VENIDO A COMER/BEBER!</Text>
            </View>
          </View>
          <View style={styles.admin}>
            <View style={styles.buttonAdmin}>
              <Text style={styles.textAdmin}>¡QUIERO PROMOCIONAR MI LOCAL!</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}
