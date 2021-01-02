/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react'
import { DetailEstablishmentReducer } from '../../utils/interfaces'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import Loading from '../loading/LoadingGif'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { getEstablishment } from '../../actions/promotionsFunctions'
import style from '../styles/detailEstablishmentStyles'
import EstablishmentList from './EstablishmentList'
import EstablishmentInfo from './EstablishmentInfo'

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
          {filterState === 'promotions' ? <EstablishmentList promotions={establishment.promotions}/> : <EstablishmentInfo establishment={establishment}/>}
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
