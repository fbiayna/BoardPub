/* eslint-disable no-use-before-define */
import React from 'react'
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native'

const background = { uri: 'https://trello-attachments.s3.amazonaws.com/5ec457ae0da99b76dcdba46b/5ec457af3dca9f5428a9f179/b713ff3791a65ab0ca93ae3e5f76f476/menu-609364_1280.jpg' }
const logo = { uri: 'https://trello-attachments.s3.amazonaws.com/5ec457ae0da99b76dcdba46b/5ec457af3dca9f5428a9f179/263e7f5a2d4e919205f4745afbf1a032/logo-boardpub.png' }

export default function Login () {
  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.backimage}>
        <View style={styles.shadow}>
          <View style={styles.logo}>
            <Image source={logo} style={styles.image} />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  backimage: {
    opacity: 0.85,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  shadow: {
    width: '100%',
    height: '100%',
    opacity: 1,
    backgroundColor: '#000'
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2.5
  },
  image: {
    width: 320,
    height: 100
  },
  textSlogan: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textAction: {
    flex: 1,
    alignItems: 'center'
  },
  text: {
    width: 250,
    fontWeight: 'bold',
    alignItems: 'center',
    fontSize: 20,
    lineHeight: 30,
    textAlign: 'center',
    color: '#fff'
  },
  textSearch: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 25,
    lineHeight: 30,
    textAlign: 'center',
    color: '#fff'
  },
  user: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  buttonUser: {
    width: 260,
    height: 60,
    backgroundColor: '#92000A',
    justifyContent: 'center',
    borderRadius: 50,
    elevation: 4
  },
  textUser: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 22,
    textAlign: 'center',
    color: '#fff'
  },
  admin: {
    flex: 2,
    alignItems: 'center'
  },
  buttonAdmin: {
    width: 260,
    height: 60,
    backgroundColor: '#1565C0',
    justifyContent: 'center',
    borderRadius: 50,
    elevation: 4
  },
  textAdmin: {
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 22,
    textAlign: 'center',
    color: '#fff'
  }
})
