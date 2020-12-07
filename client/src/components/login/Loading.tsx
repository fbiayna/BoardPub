/* eslint-disable no-use-before-define */
import React from 'react'
import { ImageBackground, View, Image } from 'react-native'
import styles from '../styles/LoginLoading'
import { logoBoardPub, loginBackground } from '../../utils/images'
import { useIsFocused } from '@react-navigation/native'
import firebase from 'firebase'
import { connect } from 'react-redux'
import { getUser } from '../../actions/userFunctions'

function Loading ({ dispatch, navigation }:any) {
  const isFocused = useIsFocused()
  if (isFocused) {
    setTimeout(checkIfLoggedIn, 2500)
  }

  function checkIfLoggedIn () {
    firebase.auth().onAuthStateChanged((firebaseUser:any) => {
      if (firebaseUser) {
        const { providerData } = firebaseUser
        dispatch(getUser(providerData[0].uid))
        navigation.navigate('application')
      } else {
        navigation.navigate('loginStart')
      }
    })
  }
  return (
    <View style={styles.container} testID="loading">
      <ImageBackground source={loginBackground()} style={styles.backimage}>
        <View style={styles.shadow}>
          <View style={styles.logo}>
            <Image source={logoBoardPub()} style={styles.image} />
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

function mapStateToProps ({ loginReducer }: any) {
  return {
    user: loginReducer.user
  }
}
export default connect(mapStateToProps)(Loading)
