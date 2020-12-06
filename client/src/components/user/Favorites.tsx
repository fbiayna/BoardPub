/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react'
import style from '../styles/Favorites'
import { Reducer } from '../../utils/interfaces'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { requestPromotions } from '../../actions/actionsFunctions'
import Loading from '../loading/LoadingGif'
import FavoritesList from './FavoritesList'

function Favorites ({ promotions, dispatch, navigation }: Reducer) {
  useEffect(() => {
    if (!promotions || !promotions?.length) {
      dispatch(requestPromotions())
    }
  }, [promotions])

  return (
    <View testID={'list-favorites'} style={style.container}>
      <View style={style.headerTop}>
        <View style={style.ubication}>
            <Text style={style.ubicationText}>Tus Favoritos</Text>
        </View>
      </View>
      {!promotions
        ? <Loading/>
        : promotions.length &&
          <FavoritesList key={'favorites'}
          favorites={promotions} navigation={navigation} />
          }
    </View>
  )
}

function mapStateToProps ({ boardPubReducer }: any) {
  return {
    promotions: boardPubReducer.promotions
  }
}
export default connect(mapStateToProps)(Favorites)
