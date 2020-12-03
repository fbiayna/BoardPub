/* eslint-disable no-use-before-define */
import React from 'react'
import { Reducer } from '../../utils/interfaces'
import { View, Text, ImageBackground } from 'react-native'
import { connect } from 'react-redux'
import { meal } from '../../utils/images'
import Loading from '../loading/LoadingGif'
import { Icon } from 'react-native-elements'
import { requestPromotion } from '../../actions/actionsFunctions'
import style from '../styles/DetailPromotion'

function DetailPromotion ({ promotion, dispatch }: Reducer) {
  const promotionId = '5fc76396b20116bdfc9c80df'

  if (!promotion) {
    dispatch(requestPromotion(promotionId))
  }

  return (
    <View style={style.container}>
      {!promotion
        ? <Loading />
        : <>
            <View style={style.imageContainer}>
            <Icon name="restaurant" style={style.icon} type="materialicons" />
              <ImageBackground source={meal()} style={style.promotionImage} >
                <View style={style.priceContainer}>
                  <Text style={style.price}>{promotion.price}</Text>
                </View>
              </ImageBackground>
            </View>
            <View style={style.infoContainer}>
              <View style={style.titleContainer}>
                <Text style={style.title}>{promotion.name}</Text>
                <Text style={style.establishment}>{promotion.establishment}</Text>
              </View>
            </View>
            <View style={style.otherInfoContainer}>
              <View style={style.otherContainer}>
                <Text style={style.title}>{promotion.date}</Text>
                <Text style={style.establishment}>{promotion.establishment}</Text>
              </View>
            </View>
          </>
      }
    </View>
  )
}

function mapStateToProps ({ boardPubReducer }: any) {
  return {
    promotion: boardPubReducer.promotion
  }
}
export default connect(mapStateToProps)(DetailPromotion)
