import { combineReducers } from 'redux'
import userReducer from './user/userReducer'
import registerReducer from './register/registerReducer'
import emailSubscriberReducer from './emailSubscription/emailSubReducer'

const rootReducer = combineReducers({
  user: userReducer,
  register: registerReducer,
  emailSubscriber: emailSubscriberReducer
})

export default rootReducer