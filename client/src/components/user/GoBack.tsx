/* eslint-disable no-use-before-define */
import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import style from '../styles/GoBack'
import { CommonActions, useNavigation } from '@react-navigation/native'

export default function GoBack ():any {
  const nav = useNavigation()
  return (
        <View style={style.headerDetail}>
          <TouchableOpacity onPress={() => nav.dispatch(CommonActions.goBack())} activeOpacity={0.5}>
           <Icon name="arrow-back" size={40} style={style.goBack}/>
          </TouchableOpacity>
        </View>
  )
}
