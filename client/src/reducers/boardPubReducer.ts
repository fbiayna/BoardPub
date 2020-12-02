import actionTypes from '../actions/actionTypes'
import { Action } from '../utils/interfaces'

const initialState = {}

export default function boardPubReducer (state: object = initialState, action: Action) {
  let answer = state
  switch (action.type) {
    case actionTypes.LOAD_PROMOTIONS:
      answer = { ...state, promotions: action.promotions }
      break
    case actionTypes.LOAD_PROMOTIONS_ERROR:
      answer = { ...state, error: action.error }
      break
    default:
      answer = state
      break
  }

  return answer
}
