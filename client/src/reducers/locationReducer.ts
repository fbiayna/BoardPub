import actionLocationTypes from '../actions/actionLocationTypes'
import { ActionLocation } from '../utils/interfaces'

const initialState = {}

export default function locationReducer (state: any = initialState, action: ActionLocation) {
  let answer = state
  switch (action.type) {
    case actionLocationTypes.PERMISSIONS_NOT_ACCEPTED:
      answer = { ...state, error: action.error }
      break
    case actionLocationTypes.PERMISSIONS_ERROR:
      answer = { ...state, error: action.error }
      break
    case actionLocationTypes.LOCATION_SUCCESS:
      answer = { ...state, latitude: action.latitude, longitude: action.longitude }
      break
    case actionLocationTypes.LOCATION_ERROR:
      answer = { ...state, error: action.error }
      break
    case actionLocationTypes.CITY_SUCCESS:
      answer = { ...state, city: action.city }
      break
    case actionLocationTypes.CITY_ERROR:
      answer = { ...state, error: action.error }
      break
    default:
      answer = state
      break
  }

  return answer
}
