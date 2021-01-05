/* eslint-disable no-use-before-define */
import React from 'react'
import { View, Text, ScrollView, Dimensions, StyleSheet } from 'react-native'
import style from '../styles/establishmentInfoStyles'
import EstablishmentMenu from './EstablishmentMenu'

const { width } = Dimensions.get('window')

export default function EstablishmentInfo ({ filterPage, establishment }:any) {
  return (
    <View style={listStyle.listContent}>
      <EstablishmentMenu filterPage={filterPage}/>
      <View style={style.descriptionContainer}>
        <Text style={style.infoPromo}>INFORMACIÓN DEL ESTABLECIMIENTO</Text>
      </View>
      <ScrollView>
        <View style={style.infoContainer}>
          <Text style={style.description}>{establishment.description}</Text>
        </View>
    </ScrollView>
    </View>
  )
}

const listStyle = StyleSheet.create({
  listContent: {
    flex: 1,
    width: width,
    position: 'relative'
  }
})
