/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react'
import style from '../styles/HomePromotionsMenu'
import { Reducer } from '../../utils/interfaces'
import { View, Text, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { connect } from 'react-redux'
import { requestPromotions } from '../../actions/actionsFunctions'
import Loading from '../loading/LoadingGif'
import Navigation from './Navigation'
import typesFood from '../../utils/functions'
import HomePromotions from './HomePromotions'

function HomePromotionsMenu ({ promotions, dispatch, navigation }: Reducer) {
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
            <Text style={style.ubicationText}>Badalona</Text>
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
      <Navigation/>
    </View>
  )
}

function mapStateToProps ({ boardPubReducer }: any) {
  return {
    promotions: boardPubReducer.promotions
  }
}
export default connect(mapStateToProps)(HomePromotionsMenu)
