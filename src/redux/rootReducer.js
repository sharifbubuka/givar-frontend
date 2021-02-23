import { combineReducers } from 'redux'
import userReducer from './user/userReducer'
import registerReducer from './register/registerReducer'

const rootReducer = combineReducers({
  user: userReducer,
  register: registerReducer 
})

export default rootReducer