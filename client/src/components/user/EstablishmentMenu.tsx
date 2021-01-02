/* eslint-disable no-use-before-define */
import React from 'react'
import style from '../styles/detailEstablishmentStyles'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function EstablishmentMenu ({ typeEstablishmentPage }:any) {
  return (
        <View style={style.menuContainer}>
            <View style={style.menu}>
              <Icon name='assignment' style={typeEstablishmentPage === 'promotions' ? style.active : style.noActive} />
              <Icon name='location-on' style={typeEstablishmentPage === 'map' ? style.active : style.noActive}/>
              <Icon name='info' style={typeEstablishmentPage === 'information' ? style.active : style.noActive} />
            </View>
          </View>
  )
}
