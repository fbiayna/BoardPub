/* eslint-disable no-use-before-define */
import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import style from '../../styles/goBackStyles'
import { CommonActions, useNavigation } from '@react-navigation/native'

export default function GoBack ():any {
  const { dispatch } = useNavigation()
  return (
      <TouchableOpacity style={style.addButton} testID="goBackButton" onPress={() => dispatch(CommonActions.goBack())} activeOpacity={0.8}>
      <View style={style.addContainer}>
        <Icon name="arrow-back" size={35} style={style.goBack}/>
      </View>
      </TouchableOpacity>
  )
}
