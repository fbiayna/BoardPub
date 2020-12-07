/* eslint-disable no-use-before-define */
import React from 'react'
import style from '../styles/Favorites'
import { View, Text, Button } from 'react-native'
import firebase from 'firebase'
import { connect } from 'react-redux'
import { LoginReducer } from 'utils/interfaces'

function Profile ({ user, dispatch }:LoginReducer) {
  return (
    <View testID={'list-favorites'} style={style.container}>
      <View style={style.headerTop}>
        <View style={style.ubication}>
            <Text style={style.ubicationText}>Tu Perfil</Text>
        </View>
      </View>
      <Button title='Sign out' onPress={() => firebase.auth().signOut()}/>
    </View>
  )
}

function mapStateToProps ({ loginReducer }: any) {
  return {
    user: loginReducer.user,
    userState: loginReducer.userState
  }
}
export default connect(mapStateToProps)(Profile)
