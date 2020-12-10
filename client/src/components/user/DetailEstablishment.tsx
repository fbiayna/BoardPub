/* eslint-disable no-use-before-define */
import React, { useCallback } from 'react'
import { DetailEstablishmentReducer, Establishment } from '../../utils/interfaces'
import { View, Text, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { useRoute, useFocusEffect } from '@react-navigation/native'
import Loading from '../loading/LoadingGif'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { getEstablishment } from '../../actions/establishmentsFunctions'
import style from '../styles/DetailEstablishment'
import GoBack from './navigation/GoBack'

function DetailEstablishment ({ establishment, dispatch }: DetailEstablishmentReducer) {
  const { params: { id } }:any = useRoute()

  useFocusEffect(
    useCallback(() => { dispatch(requestestablishment(id)) }, [id]))

  return (
    <View testID={'detail'} style={style.container}>
      {!establishment || establishment._id !== id
        ? <Loading />
        : <>
        <GoBack/>
        <ScrollView>
            <View style={style.imageContainer}>
              <ImageBackground source={{ uri: establishment.photo }} style={style.establishmentImage} >
                <View style={style.priceContainer}>
                  <Text style={style.price}>{establishment.price}</Text>
                </View>
              </ImageBackground>
            </View>
            <View style={style.infoContainer}>
              <View style={style.titleContainer}>
                <Text style={style.title}>{establishment.name}</Text>
                <Text style={style.establishment}>{establishment.name}</Text>
              </View>
            </View>
            <View style={style.otherInfoContainer}>
              <View style={style.otherContainer}>
                <View style={style.dateContainer}>
                  <Icon name="schedule" size={18} style={style.schedule}/>
                  <Text style={style.date}>{establishment.date}</Text>
                </View>
                <View style={style.dateContainer}>
                  <Icon name="place" size={18} style={style.schedule}/>
                  <Text style={style.ubication}>{establishment.ubication} - {establishment.city}</Text>
                </View>
              </View>
            </View>
            <View style={style.descriptionContainer}>
              <Text style={style.infoPromo}>INFORMACIÓN DEL ESTABLECIMIENTO</Text>
              <Text style={style.description}>{establishment.description}</Text>
            </View>
            <View style={style.valorationsContainer}>
              <Text style={style.infoValoration}>VALORACIONES</Text>
              <View style={style.numbersContainer}>
                <View style={style.valContainer}>
                  <Text style={style.numbersValoration}>{establishment.rating}/5.0</Text>
                </View>
                <Text style={style.textValoration}>{establishment.name} está muy bien valorado por parte de los usuarios</Text>
              </View>
            </View>
            <View style={style.opinionContainer}>
              <View style={style.opinionTextContainer}>
                <Text style={style.opinionText}>¿Qué opinas de {establishment.name}?</Text>
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
          </>
      }
    </View>
  )
}

function mapStateToProps ({ boardPubReducer, loginReducer }: any) {
  return {
    establishment: boardPubReducer.establishment
  }
}
export default connect(mapStateToProps)(DetailEstablishment)
