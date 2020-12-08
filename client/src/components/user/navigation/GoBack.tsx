/* eslint-disable no-use-before-define */
import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import style from '../../styles/GoBack'
import { CommonActions, useNavigation } from '@react-navigation/native'

export default function GoBack ():any {
  const nav = useNavigation()
  return (
        <View testID={'goBack'} style={style.headerDetail}>
          <TouchableOpacity testID={'goBackButton'} onPress={() => nav.dispatch(CommonActions.goBack())} activeOpacity={0.5}>
           <Icon name="arrow-back" size={35} style={style.goBack}/>
          </TouchableOpacity>
        </View>
  )
}
