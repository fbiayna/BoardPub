/* eslint-disable no-use-before-define */
import React, { useCallback } from 'react'
import { DetailEstablishmentReducer } from '../../utils/interfaces'
import { View, Text, ImageBackground, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { useRoute, useFocusEffect } from '@react-navigation/native'
import Loading from '../loading/LoadingGif'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { getEstablishment } from '../../actions/promotionsFunctions'
import style from '../styles/DetailEstablishment'
import GoBack from './navigation/GoBack'

function DetailEstablishment ({ establishment, dispatch }: DetailEstablishmentReducer) {
  const { params: { id } }:any = useRoute()

  useFocusEffect(
    useCallback(() => { dispatch(getEstablishment(id)) }, [id]))

  return (
    <View testID={'detail-establishment'} style={style.container}>
      {!establishment || establishment._id !== id
        ? <Loading />
        : <>
        <GoBack/>
        <ScrollView>
            <View style={style.imageContainer}>
              <ImageBackground source={{ uri: establishment.photo }} style={style.establishmentImage} ></ImageBackground>
            </View>
            <View style={style.infoContainer}>
              <View style={style.titleContainer}>
                <Text style={style.title}>{establishment.name}</Text>
                <View style={style.ubiContainer}>
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

function mapStateToProps ({ boardPubReducer }: any) {
  return {
    establishment: boardPubReducer.establishment
  }
}
export default connect(mapStateToProps)(DetailEstablishment)
