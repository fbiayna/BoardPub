/* eslint-disable no-use-before-define */
import React from 'react'
import { Reducer } from '../../utils/interfaces'
import { View, Text, ImageBackground, ScrollView, SafeAreaView } from 'react-native'
import { connect } from 'react-redux'
import { meal } from '../../utils/images'
import Loading from '../loading/LoadingGif'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { requestPromotion } from '../../actions/actionsFunctions'
import style from '../styles/DetailPromotion'

function DetailPromotion ({ promotion, dispatch }: Reducer) {
  const promotionId = '5fc76396b20116bdfc9c80df'

  if (!promotion) {
    dispatch(requestPromotion(promotionId))
  }

  return (
    <SafeAreaView testID={'detail'} style={style.container}>
      {!promotion
        ? <Loading />
        : <ScrollView>
            <View style={style.imageContainer}>
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
              <View>
                <Icon name="star" size={35} style={style.star}/>
              </View>
            </View>
            <View style={style.otherInfoContainer}>
              <View style={style.otherContainer}>
                <View style={style.dateContainer}>
                  <Icon name="schedule" size={18} style={style.schedule}/>
                  <Text style={style.date}>{promotion.date}</Text>
                </View>
                <View style={style.dateContainer}>
                  <Icon name="place" size={18} style={style.schedule}/>
                  <Text style={style.ubication}>{promotion.ubication}</Text>
                </View>
              </View>
            </View>
            <View style={style.descriptionContainer}>
              <Text style={style.infoPromo}>INFORMACIÓN DE LA PROMOCIÓN</Text>
              <Text style={style.description}>{promotion.description}</Text>
            </View>
            <View style={style.valorationsContainer}>
              <Text style={style.infoValoration}>VALORACIONES</Text>
              <View style={style.numbersContainer}>
                <View style={style.valContainer}>
                  <Text style={style.numbersValoration}>4.7/5.0</Text>
                </View>
                <Text style={style.textValoration}>Skylab Coders Academy está muy bien valorado por parte de los usuarios</Text>
              </View>
            </View>
            <View style={style.opinionContainer}>
              <View style={style.opinionTextContainer}>
                <Text style={style.opinionText}>¿Qué opinas de Skylab Coders Academy?</Text>
              </View>
              <View style={style.opinionStarContainer}>
                <Icon name="star" size={35} style={style.opinionStar}/>
                <Icon name="star" size={35} style={style.opinionStar}/>
                <Icon name="star" size={35} style={style.opinionStar}/>
                <Icon name="star" size={35} style={style.opinionStar}/>
                <Icon name="star" size={35} style={style.opinionStar}/>
              </View>
            </View>
          </ScrollView>
      }
    </SafeAreaView>
  )
}

function mapStateToProps ({ boardPubReducer }: any) {
  return {
    promotion: boardPubReducer.promotion
  }
}
export default connect(mapStateToProps)(DetailPromotion)
