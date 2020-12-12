/* eslint-disable no-use-before-define */
import React from 'react'
import { View, Text } from 'react-native'
import style from '../styles/MapPromotion'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { connect } from 'react-redux'
import Loading from '../loading/LoadingGif'
import MapView, { Marker } from 'react-native-maps'
import { Promotion } from 'utils/interfaces'

function HomePromotionsMenu ({ promotions, latitude, longitude, city }:any) {
  return (
    <View style={style.container}>
        <View style={style.headerTop}>
            <View style={style.ubication}>
            {!city
              ? <View style={style.town}>
              <Icon name="near-me" style={style.nearIcon}/>
              <Text style={style.ubicationText}>No hay ubicación</Text>
            </View>
              : <>
                <View style={style.town}>
                  <Icon name="near-me" style={style.nearIcon}/>
                  <Text style={style.ubicationText}>{city}</Text>
                </View>
                <Text style={style.nearYouText}>Tu posición actual</Text>
              </>}
            </View>
        </View>
        {!latitude || !longitude
          ? <Loading/>
          : <MapView style={style.map} initialRegion={{ latitude: latitude, longitude: longitude, latitudeDelta: 0.03, longitudeDelta: 0.03 }}>
              <Marker
              coordinate={{
                latitude: latitude,
                longitude: longitude
              }}
              title={'Estás aquí'}
              />
              {promotions?.map((promotion:Promotion) => (
                  <Marker pinColor={'#0E4686'} key={promotion._id} coordinate={{
                    latitude: promotion.establishment.coords.latitude,
                    longitude: promotion.establishment.coords.longitude
                  }}/>
              ))}
          </MapView>
        }
    </View>
  )
}

function mapStateToProps ({ boardPubReducer, locationReducer }: any) {
  return {
    promotions: boardPubReducer.promotions,
    city: locationReducer.city,
    latitude: locationReducer.latitude,
    longitude: locationReducer.longitude
  }
}
export default connect(mapStateToProps)(HomePromotionsMenu)
