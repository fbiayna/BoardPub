import actionTypes from '../actions/actionTypes'
import { ActionUser } from '../utils/interfaces'

const initialState = {}

export default function loginReducer (state: object = initialState, action: ActionUser) {
  let answer = state
  switch (action.type) {
    case actionTypes.LOAD_USER:
      answer = { ...state, user: action.user }
      break
    case actionTypes.LOAD_USER_ERROR:
      answer = { ...state, error: action.error }
      break
    case actionTypes.ADD_AND_LOAD_USER:
      answer = { ...state, user: action.user }
      break
    case actionTypes.ADD_AND_LOAD_USER_ERROR:
      answer = { ...state, error: action.error }
      break
    default:
      answer = state
      break
  }

  return answer
}
