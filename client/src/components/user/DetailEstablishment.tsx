/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react'
import { DetailEstablishmentReducer } from '../../utils/interfaces'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import MapView, { Callout, Marker } from 'react-native-maps'
import Loading from '../loading/LoadingGif'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { getEstablishment } from '../../actions/promotionsFunctions'
import style from '../styles/detailEstablishmentStyles'

function DetailEstablishment ({ establishment, dispatch, route, navigation }: DetailEstablishmentReducer) {
  const [filterState, setFilter] = useState('promotions')
  const { params: { id } } = route

  useEffect(() => { dispatch(getEstablishment(id)) }, [])

  return (
    <View testID={'detail-establishment'} style={style.container}>
      {!establishment || establishment._id !== id
        ? <Loading />
        : <>
          <View style={style.headerTop}>
            <View style={style.establishment}>
                <Text style={style.establishmentText}>{establishment.name}</Text>
            </View>
            <TouchableOpacity style={style.backButton} testID="goBackButton" onPress={() => navigation.goBack()} activeOpacity={0.8}>
              <View style={style.backContainer}>
                <Icon name="arrow-back" size={30} style={style.goBack}/>
              </View>
            </TouchableOpacity>
          </View>
          <View style={style.menuContainer}>
            <View style={style.menu}>
              <Icon name="assignment" style={filterState === 'promotions' ? style.active : style.noActive} onPress={() => setFilter('promotions')} />
              <Icon name="info" style={filterState === 'information' ? style.active : style.noActive} onPress={() => setFilter('information')} />
            </View>
          </View>
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
        </>
      }
    </View>
  )
}

function mapStateToProps ({ promotionsReducer }: any) {
  return {
    establishment: promotionsReducer.establishment
  }
}
export default connect(mapStateToProps)(DetailEstablishment)
