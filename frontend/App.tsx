/* eslint-disable no-use-before-define */
import React from 'react'
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native'

const background = { uri: 'https://trello-attachments.s3.amazonaws.com/5ec457ae0da99b76dcdba46b/5ec457af3dca9f5428a9f179/b713ff3791a65ab0ca93ae3e5f76f476/menu-609364_1280.jpg' }
const logo = { uri: 'https://trello-attachments.s3.amazonaws.com/5ec457ae0da99b76dcdba46b/5ec457af3dca9f5428a9f179/263e7f5a2d4e919205f4745afbf1a032/logo-boardpub.png' }

export default function App () {
  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.backimage}>
        <View style={styles.shadow}>
        <Image source={logo} style={styles.image} />
        <Text style={styles.text}>Las mejores promociones de tus locales hosteleros, en una sola app.</Text>
        <Text style={styles.textSearch}>¿Qué estás buscando?</Text>
        <View style={styles.user}></View>
        <Text style={styles.textUser}>¡HE VENIDO A COMER/BEBER!</Text>
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
    opacity: 0.8,
    width: 412,
    height: 812,
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  shadow: {
    width: 412,
    height: 812,
    opacity: 1,
    backgroundColor: '#000'
  },
  image: {
    position: 'absolute',
    width: 412,
    height: 252,
    left: 0,
    top: 0

  },
  text: {
    position: 'absolute',
    width: 300,
    height: 120,
    left: 55.5,
    top: 287,
    fontFamily: 'Cabin-Bold',
    fontWeight: 'bold',
    fontSize: 25,
    lineHeight: 30,
    textAlign: 'center',
    color: '#fff'
  },
  textSearch: {
    position: 'absolute',
    width: 300,
    height: 60,
    left: 55.5,
    top: 439,
    fontWeight: 'bold',
    fontSize: 25,
    lineHeight: 30,
    textAlign: 'center',
    color: '#fff'
  },
  user: {
    position: 'absolute',
    width: 324,
    height: 69,
    right: 44,
    bottom: 215,
    backgroundColor: '#92000A',
    borderRadius: 50
  },
  textUser: {
    position: 'absolute',
    width: 300,
    height: 22,
    left: 55.5,
    top: 552,
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 22,
    textAlign: 'center',
    color: '#fff'
  }
})
