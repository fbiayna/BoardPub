import { combineReducers } from 'redux'
import boardPubReducer from './boardPubReducer'
import loginReducer from './loginReducer'

const rootReducer = combineReducers({
  boardPubReducer,
  loginReducer
})

export default rootReducer
