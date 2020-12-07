/* eslint-disable no-use-before-define */
import React from 'react'
import style from '../styles/Profile'
import { View, Text, Button, ImageBackground } from 'react-native'
import firebase from 'firebase'
import { connect } from 'react-redux'
import { LoginReducer } from 'utils/interfaces'

function Profile ({ user }:LoginReducer) {
  return (
    <View testID={'list-profile'} style={style.container}>
      <View style={style.headerTop}>
        <View style={style.profile}>
            <Text style={style.profileText}>Tu Perfil</Text>
        </View>
      </View>
      <Button title='Sign out' onPress={() => firebase.auth().signOut()}/>
      <View style={style.photoContainer}>
        <View style={style.photoPreContainer}>
          <ImageBackground source={{ uri: user?.photo }} style={style.photo} imageStyle={{ borderRadius: 50 }}></ImageBackground>
        </View>
      </View>
      <Text>{user?.name}</Text>
      <Text>{user?.surname}</Text>
      <Text>{user?.email}</Text>
      <Text>{user?.admin ? 'El perfil es administrador' : 'El perfil no es administrador'}</Text>
      <Text>{user?.favorites}</Text>
    </View>
  )
}

function mapStateToProps ({ loginReducer }: any) {
  console.log(loginReducer.user.surname)
  return {
    user: loginReducer.user,
    userState: loginReducer.userState
  }
}
export default connect(mapStateToProps)(Profile)
