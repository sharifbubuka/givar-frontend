import {
  SAVE_EMAIL_SUBSCRIBER_SUCCESS,
  SAVE_EMAIL_SUBSCRIBER_FAILURE
} from './emailSubTypes'
//firebase comment

const initialState = {
  saveSubscriberSuccess: false,
  saveSubscriberFailure: false,
  emailAlreadyExists: false,
  internalServerError: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_EMAIL_SUBSCRIBER_SUCCESS:
      return {
        ...state,
        saveSubscriberSuccess: true
      }
    case SAVE_EMAIL_SUBSCRIBER_FAILURE:
      return {
        ...state,
        saveSubscriberFailure: true,
        emailAlreadyExists: action.payload.message === 'Email already exists' ? true : false,
        internalServerError: action.payload.message === 'Internal Server Error' ? true : false
      }
    default: return state
  }
}

export default reducer