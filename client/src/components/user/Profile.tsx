/* eslint-disable no-use-before-define */
import React from 'react'
import style from '../styles/Favorites'
import { View, Text, Button } from 'react-native'
import firebase from 'firebase'

export default function Profile () {
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
