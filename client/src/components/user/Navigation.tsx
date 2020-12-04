/* eslint-disable no-use-before-define */
import React from 'react'
import style from '../styles/Navigation'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function Navigation ({ site, navigation }:any) {
  return (
    <View style={style.navigationFooter}>
      <TouchableOpacity style={style.navigationOptions}>
        <Icon name="style" style={style.iconNavigationActive} />
        <Text style={style.navigationFooterActive}>Promociones</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.navigationOptions}>
        <Icon name="explore" style={style.iconnavigationNotActive} />
        <Text style={style.navigationFooterNotActive}>Cerca de tí</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.navigationOptions}>
        <Icon name="bookmark" style={style.iconnavigationNotActive} />
        <Text style={style.navigationFooterNotActive}>Tus favoritos</Text>
      </TouchableOpacity>
    </View>
  )
}
