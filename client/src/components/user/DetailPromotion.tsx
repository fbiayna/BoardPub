/* eslint-disable no-use-before-define */
import React from 'react'
import { DetailReducer, Establishment } from '../../utils/interfaces'
import { View, Text, ImageBackground, ScrollView, TouchableOpacity, Alert } from 'react-native'
import { connect } from 'react-redux'
import { useRoute, useIsFocused } from '@react-navigation/native'
import Loading from '../loading/LoadingGif'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { requestPromotion } from '../../actions/promotionsFunctions'
import { addFavorite } from '../../actions/userFunctions'
import style from '../styles/detailPromotionStyles'
import GoBack from './navigation/GoBack'

function DetailPromotion ({ user, promotion, dispatch }: DetailReducer) {
  const { params: { id } }:any = useRoute()

  const isFocused = useIsFocused()
  if (isFocused) {
    dispatch(requestPromotion(id))
  }

  return (
    <View testID={'detail'} style={style.container}>
      {!promotion || promotion._id !== id
        ? <Loading />
        : <>
        <GoBack/>
        <ScrollView>
            <View style={style.imageContainer}>
              <ImageBackground source={{ uri: promotion.establishment.photo }} style={style.promotionImage} >
                <View style={style.priceContainer}>
                  <Text style={style.price}>{promotion.price}</Text>
                </View>
              </ImageBackground>
            </View>
            <View style={style.infoContainer}>
              <View style={style.titleContainer}>
                <Text style={style.title}>{promotion.name}</Text>
                <Text style={style.establishment}>{promotion.establishment.name}</Text>
              </View>
              {user?.favorites?.find((establishment: Establishment) => establishment._id.toString() === promotion.establishment._id.toString())
                ? null
                : <TouchableOpacity style={style.addButton} testID="addFavorite" onPress={() => dispatch(addFavorite(user, promotion.establishment._id)) && Alert.alert('¡Favorito añadido!', `Has añadido a ${promotion.establishment.name} a tu red de 'Favoritos'`, [{ text: 'Volver' }])} activeOpacity={0.9}>
                    <View style={style.addContainer}>
                      <Icon name="star" size={35} style={style.star}/>
                    </View>
              </TouchableOpacity>
              }
            </View>
            <View style={style.otherInfoContainer}>
              <View style={style.otherContainer}>
                <View style={style.dateContainer}>
                  <Icon name="schedule" size={18} style={style.schedule}/>
                  <Text style={style.date}>{promotion.date}</Text>
                </View>
                <View style={style.dateContainer}>
                  <Icon name="place" size={18} style={style.schedule}/>
                  <Text style={style.ubication}>{promotion.establishment.ubication} - {promotion.establishment.city}</Text>
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
                  <Text style={style.numbersValoration}>{promotion.establishment.rating}/5.0</Text>
                </View>
                <Text style={style.textValoration}>{promotion.establishment.name} está muy bien valorado por parte de los usuarios</Text>
              </View>
            </View>
          </ScrollView>
          </>
      }
    </View>
  )
}

function mapStateToProps ({ promotionsReducer, userReducer }: any) {
  return {
    promotion: promotionsReducer.promotion,
    user: userReducer.user
  }
}
export default connect(mapStateToProps)(DetailPromotion)
