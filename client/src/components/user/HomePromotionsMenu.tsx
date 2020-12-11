/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react'
import style from '../styles/HomePromotionsMenu'
import { Reducer } from '../../utils/interfaces'
import { View, Text, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { connect } from 'react-redux'
import { requestPromotions } from '../../actions/promotionsFunctions'
import Loading from '../loading/LoadingGif'
import { typesFood, distancePoints } from '../../utils/functions'
import HomePromotions from './HomePromotionsList'
import * as Location from 'expo-location'

function HomePromotionsMenu ({ promotions, dispatch, navigation }: Reducer) {
  const [location, setLocation] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestPermissionsAsync()
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied')
        return
      }
      const geoLocation = await Location.getCurrentPositionAsync({})
      console.log(geoLocation)
      const { coords: { latitude, longitude } }:any = geoLocation
      const location:any = await Location.reverseGeocodeAsync({ latitude, longitude })
      setLocation(location[0].city)
    })()
  }, [])

  let text = 'Waiting..'
  if (errorMsg) {
    text = errorMsg
  } else if (location) {
    text = location
  }

  useEffect(() => {
    if (!promotions || !promotions?.length) {
      dispatch(requestPromotions())
    }
  }, [promotions])

  return (
    <View testID={'list-promotions'} style={style.container}>
      <View style={style.headerTop}>
        <View style={style.ubication}>
          <View style={style.town}>
            <Icon name="near-me" style={style.nearIcon}/>
            <Text style={style.ubicationText}>{text}</Text>
          </View>
          <Text style={style.nearYouText}>A 10 km de ti</Text>
        </View>
      </View>
      {!promotions
        ? <Loading/>
        : promotions.length && <ScrollView horizontal={true} pagingEnabled={true}>
          {typesFood().map((typePromotion:string) =>
          <HomePromotions key={typePromotion} typePromotion={typePromotion}
          promotions={promotions.filter((promotion) => promotion.type === typePromotion)} navigation={navigation} />
          )}
        </ScrollView>}
    </View>
  )
}

function mapStateToProps ({ boardPubReducer }: any) {
  return {
    promotions: boardPubReducer.promotions
  }
}
export default connect(mapStateToProps)(HomePromotionsMenu)
