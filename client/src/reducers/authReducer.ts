import actionAuthTypes from '../actions/actionAuthTypes'
import { ActionAuth } from '../utils/interfaces'

const initialState = {}

export default function AuthReducer (state: any = initialState, action: ActionAuth) {
  let newState = null
  switch (action.type) {
    case actionAuthTypes.CHECK_LOGIN_SUCCESS:
      newState = { ...state, logInExists: action.logInExists }
      break
    case actionAuthTypes.CHECK_LOGIN_ERROR:
      newState = { ...state, logInExists: action.logInExists }
      break
    case actionAuthTypes.SIGN_IN_ERROR:
      newState = { ...state, error: action.error, logInState: action.logInState }
      break
    default:
      newState = state
      break
  }

  return newState
}
