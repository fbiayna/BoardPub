import axios from 'axios'
import actionTypes from './actionTypes'

const backURL = 'http://localhost:5000'

function requestPromotionsSuccess (promotions: Object) {
  return {
    type: actionTypes.LOAD_PROMOTIONS,
    promotions
  }
}

function requestPromotionsError (error: any) {
  return {
    type: actionTypes.LOAD_PROMOTIONS_ERROR,
    error
  }
}

function requestPromotions () {
  return async (dispatch: Function) => {
    try {
      const promotions = await axios.get(`${backURL}/admin`)
      dispatch(requestPromotionsSuccess(promotions.data))
    } catch (error) {
      dispatch(requestPromotionsError(error))
    }
  }
}

export default requestPromotions
