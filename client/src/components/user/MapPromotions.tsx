/* eslint-disable no-use-before-define */
import React from 'react'
import { View, Text } from 'react-native'
import style from '../styles/mapPromotionStyles'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { connect } from 'react-redux'
import Loading from '../loading/LoadingGif'
import { distancePoints } from '../../utils/functions'
import MapView, { Callout, Circle, Marker } from 'react-native-maps'
import { Promotion } from 'utils/interfaces'

function MapPromotions ({ navigation, promotions, latitude, longitude, city }:any) {
  return (
    <View testID={'map-promotions'} style={style.container}>
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
                <Text style={style.nearYouText}>Promociones cerca de tí</Text>
              </>}
            </View>
        </View>
        {!promotions
          ? <Loading/>
          : <MapView style={style.map} initialRegion={{ latitude: latitude, longitude: longitude, latitudeDelta: 0.03, longitudeDelta: 0.03 }}>
              {!latitude
                ? null
                : <>
                  <Marker
                coordinate={{
                  latitude: latitude,
                  longitude: longitude
                }}
                  title={'Tu posición'}
                  description={'Radio de 500 m'}
                  />
                  <Circle center={{ latitude: latitude, longitude: longitude }} radius={1000} zIndex={-1} fillColor={'rgba(100, 100, 100, 0.3)'}/>
                </>}
              {promotions?.map((promotion:Promotion) => (
                  <Marker pinColor={'#0E4686'} key={promotion._id} coordinate={{
                    latitude: promotion.establishment.coords.latitude,
                    longitude: promotion.establishment.coords.longitude
                  }}>
                    <Callout testID={'detailMap'} onPress={() => navigation.navigate('detailMap', { id: promotion._id })}>
                      <View style={style.promotionContainer}>
                        <View style={style.titleContainer}>
                          <Text style={style.title}>{promotion.name}</Text>
                          <Text style={style.establishment}>{promotion.establishment.name}</Text>
                        </View>
                        <View style={style.otherInfoContainer}>
                          <Text style={style.otherInfo}>{promotion.date}</Text>
                          {!latitude ? null : <Text style={style.otherInfo}>{distancePoints(latitude, longitude, promotion.establishment.coords.latitude, promotion.establishment.coords.longitude)} km</Text>}
                        </View>
                      </View>
                    </Callout>
                  </Marker>
              ))}
          </MapView>
        }
    </View>
  )
}

function mapStateToProps ({ promotionsReducer, locationReducer }: any) {
  return {
    promotions: promotionsReducer.promotions,
    city: locationReducer.city,
    latitude: locationReducer.latitude,
    longitude: locationReducer.longitude
  }
}
export default connect(mapStateToProps)(MapPromotions)
