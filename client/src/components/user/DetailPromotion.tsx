/* eslint-disable no-use-before-define */
import React from 'react'
import { Reducer } from '../../utils/interfaces'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import Loading from '../loading/LoadingGif'
import { requestPromotion } from '../../actions/actionsFunctions'

function DetailPromotion ({ promotion, dispatch }: Reducer) {
  const promotionId = '5fc76396b20116bdfc9c80df'

  if (!promotion) {
    dispatch(requestPromotion(promotionId))
  }

  return (<>
    {!promotion
      ? <Loading />
      : <Text>{promotion.name}</Text>}
  </>)
}

function mapStateToProps ({ boardPubReducer }: any) {
  return {
    promotion: boardPubReducer.promotion
  }
}
export default connect(mapStateToProps)(DetailPromotion)
