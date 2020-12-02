/* eslint-disable no-use-before-define */
import React from 'react'
import { Reducer } from '../../utils/interfaces'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import { requestPromotion } from '../../actions/actionsFunctions'

function DetailPromotion ({ promotion, dispatch }: Reducer) {
  const promotionId = '5fc76396b20116bdfc9c80df'

  if (!promotion) {
    dispatch(requestPromotion(promotionId))
  }

  return (
    <Text>Hola</Text>
  )
}

function mapStateToProps ({ boardPubReducer }: any) {
  return {
    promotion: boardPubReducer.promotion
  }
}
export default connect(mapStateToProps)(DetailPromotion)
