import axios from 'axios'
import { hostUrl } from '../utils/hostUrl'
import actionTypes from './actionTypes'

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

function requestPromotionSuccess (promotion: object) {
  return {
    type: actionTypes.LOAD_PROMOTION,
    promotion
  }
}

function requestPromotionError (error: any) {
  return {
    type: actionTypes.LOAD_PROMOTION_ERROR,
    error
  }
}

export function requestPromotions (type: string) {
  return async (dispatch: Function) => {
    try {
      const promotions = await axios.get(`${hostUrl()}/admin/promotions`, { params: { type } })
      dispatch(requestPromotionsSuccess(promotions.data))
    } catch (error) {
      dispatch(requestPromotionsError(error))
    }
  }
}

export function requestPromotion (id: string) {
  return async (dispatch: Function) => {
    try {
      const promotions = await axios.get(`${hostUrl()}/admin/promotion`, { params: { id } })
      dispatch(requestPromotionSuccess(promotions.data))
    } catch (error) {
      dispatch(requestPromotionError(error))
    }
  }
}
