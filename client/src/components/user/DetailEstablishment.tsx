/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react'
import { DetailEstablishmentReducer } from '../../utils/interfaces'
import { View, Text, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import Loading from '../loading/LoadingGif'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { getEstablishment } from '../../actions/promotionsFunctions'
import style from '../styles/detailEstablishmentStyles'

function DetailEstablishment ({ establishment, dispatch, route, navigation }: DetailEstablishmentReducer) {
  const { params: { id } } = route

  useEffect(() => { dispatch(getEstablishment(id)) }, [])

  return (
    <View testID={'detail-establishment'} style={style.container}>
      {!establishment || establishment._id !== id
        ? <Loading />
        : <>
        <TouchableOpacity style={style.backButton} testID="goBackButton" onPress={() => navigation.goBack()} activeOpacity={0.8}>
          <View style={style.backContainer}>
            <Icon name="arrow-back" size={35} style={style.goBack}/>
          </View>
        </TouchableOpacity>
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
