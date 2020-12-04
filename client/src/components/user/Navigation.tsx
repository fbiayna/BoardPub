/* eslint-disable no-use-before-define */
import React from 'react'
import style from '../styles/navigation'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function Navigation ():any {
  return (
    <View style={style.navigationFooter}>
        <View style={style.navigationOptions}>
          <Icon name="style" style={style.iconNavigationActive} />
          <Text style={style.navigationFooterActive}>Promociones</Text>
        </View>
        <View style={style.navigationOptions}>
          <Icon name="explore" style={style.iconnavigationNotActive} />
          <Text style={style.navigationFooterNotActive}>Cerca de tí</Text>
        </View>
        <View style={style.navigationOptions}>
          <Icon name="bookmark" style={style.iconnavigationNotActive} />
          <Text style={style.navigationFooterNotActive}>Tus favoritos</Text>
        </View>
      </View>
  )
}
