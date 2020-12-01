/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react'
import {
  View, Text
} from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import
requestPromotions
  from '../../actions/actionsFunctions'

function HomePromotionsMenu ({ promotionsList, dispatch }: any) {
  useEffect(() => {
    if (!promotionsList || !promotionsList?.length) {
      dispatch(requestPromotions())
    }
  }, [promotionsList?.length])

  return (
    <View>
      <Text>Hola</Text>
    </View>
  )
}
HomePromotionsMenu.propTypes = {
  promotionsList: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired
}
function mapStateToProps ({ boardPubReducer }: any) {
  return {
    promotionsList: boardPubReducer.promotions
  }
}
export default connect(mapStateToProps)(HomePromotionsMenu)
