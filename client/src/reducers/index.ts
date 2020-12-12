import { combineReducers } from 'redux'
import boardPubReducer from './boardPubReducer'
import userReducer from './userReducer'
import locationReducer from './locationReducer'

const rootReducer = combineReducers({
  boardPubReducer,
  userReducer,
  locationReducer
})

export default rootReducer
