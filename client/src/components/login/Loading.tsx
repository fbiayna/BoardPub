/* eslint-disable no-unused-expressions */
/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react'
import { ImageBackground, View, Image } from 'react-native'
import styles from '../styles/loginLoadingStyles'
import { logoBoardPub, loginBackground } from '../../utils/images'
import { useIsFocused } from '@react-navigation/native'
import { connect } from 'react-redux'
import { checkIfLoggedIn } from '../../actions/authFunctions'
import { authReducer } from 'utils/interfaces'

function Loading ({ dispatch, logInExists, navigation }: authReducer) {
  const isFocused = useIsFocused()
  if (isFocused) {
    setTimeout(function () {
      dispatch(checkIfLoggedIn())
    }, 2500)
  }

  useEffect(() => {
    logInExists !== undefined
      ? logInExists
          ? navigation.reset({
              index: 0,
              routes: [{ name: 'application' }]
            })
          : navigation.reset({
            index: 0,
            routes: [{ name: 'loginStart' }]
          })
      : null
  }, [logInExists])

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

function mapStateToProps ({ userReducer, authReducer }: any) {
  return {
    user: userReducer.user,
    logInExists: authReducer.logInExists
  }
}
export default connect(mapStateToProps)(Loading)
