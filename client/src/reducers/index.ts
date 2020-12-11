import { combineReducers } from 'redux'
import boardPubReducer from './boardPubReducer'
import loginReducer from './loginReducer'
import locationReducer from './locationReducer'

const rootReducer = combineReducers({
  boardPubReducer,
  loginReducer,
  locationReducer
})

export default rootReducer
