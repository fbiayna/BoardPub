/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react'
import { DetailEstablishmentReducer } from '../../utils/interfaces'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import Loading from '../loading/LoadingGif'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { getEstablishment } from '../../actions/promotionsFunctions'
import style from '../styles/detailEstablishmentStyles'
import { typesEstablishmentPages } from '../../utils/functions'
import EstablishmentList from './EstablishmentList'
import EstablishmentInfo from './EstablishmentInfo'

function DetailEstablishment ({ establishment, dispatch, route, navigation }: DetailEstablishmentReducer) {
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
          <ScrollView horizontal={true} pagingEnabled={true}>
            {typesEstablishmentPages().map((page:string) =>
              page === 'promotions'
                ? <EstablishmentList key={page} filterPage={page} promotions={establishment.promotions}/>
                : page === 'map'
                  ? <EstablishmentInfo key={page} filterPage={page} establishment={establishment}/>
                  : <EstablishmentInfo key={page} filterPage={page} establishment={establishment}/>
            )}
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
