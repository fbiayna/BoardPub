/* eslint-disable no-use-before-define */
import React from 'react'
import { View, Text, ScrollView, Dimensions, StyleSheet } from 'react-native'
import MapView, { Callout, Marker } from 'react-native-maps'
import style from '../styles/establishmentInfoStyles'
import EstablishmentMenu from './EstablishmentMenu'

const { width } = Dimensions.get('window')

export default function EstablishmentInfo ({ filterPage, establishment }:any) {
  return (
    <View style={listStyle.listContent}>
      <EstablishmentMenu filterPage={filterPage}/>
      <ScrollView>
        <View style={style.descriptionContainer}>
            <Text style={style.infoPromo}>INFORMACIÓN DEL ESTABLECIMIENTO</Text>
            <Text style={style.description}>{establishment.description}</Text>
        </View>
        <View style={style.ubicationContainer}>
            <MapView style={style.map} initialRegion={{ latitude: establishment.coords.latitude, longitude: establishment.coords.longitude, latitudeDelta: 0.006, longitudeDelta: 0.006 }}>
            <Marker coordinate={{
              latitude: establishment.coords.latitude,
              longitude: establishment.coords.longitude
            }}>
                <Callout>
                <View style={style.ubiContainer}>
                    <Text style={style.ubication}>{establishment.ubication}</Text>
                    <Text style={style.ubication}>{establishment.city}</Text>
                </View>
                </Callout>
            </Marker>
            </MapView>
        </View>
    </ScrollView>
    </View>
  )
}

const listStyle = StyleSheet.create({
  listContent: {
    flex: 1,
    width: width - 10,
    marginHorizontal: 5,
    position: 'relative'
  }
})
