/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react'
import { ImageBackground, View } from 'react-native'
import styles from '../styles/LoginUser'
import { loginBackground } from '../../utils/images'
import firebase from 'firebase'
import { useIsFocused } from '@react-navigation/native'

export default function LoginLoading ({ navigation }:any) {
  const isFocused = useIsFocused()
  useEffect(() => {
    checkIfLoggedIn()
  }, [isFocused])
  function checkIfLoggedIn () {
    firebase.auth().onAuthStateChanged((user) => {
      user ? navigation.navigate('application') : navigation.navigate('loginUser')
    })
  }
  return (
    <View style={styles.container} testID="loginUser">
      <ImageBackground source={loginBackground()} style={styles.backimage}>
      </ImageBackground>
    </View>
  )
}
