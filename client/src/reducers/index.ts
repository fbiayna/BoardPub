import { combineReducers } from 'redux'
import promotionsReducer from './promotionsReducer'
import userReducer from './userReducer'
import locationReducer from './locationReducer'

const rootReducer = combineReducers({
  promotionsReducer,
  userReducer,
  locationReducer
})

export default rootReducer
