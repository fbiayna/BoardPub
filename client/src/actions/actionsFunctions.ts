import axios from 'axios'
import actionTypes from './actionTypes'

const backURL = 'http://localhost:5000'

function requestPromotionsSuccess (promotions: object) {
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
      debugger
      const promotions = await axios.get(`${backURL}/admin/promotions`)
      dispatch(requestPromotionsSuccess(promotions.data))
      debugger
    } catch (error) {
      dispatch(requestPromotionsError(error))
    }
  }
}

export default requestPromotions
