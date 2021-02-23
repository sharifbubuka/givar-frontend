import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE
} from './registerTypes'

const initialState = {
  registrationSuccess: false,
  registeredUserId: null,
  registrationStatusCode: null,
  regsitrationStatusMessage: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_SUCCESS:
      return {
        registrationSuccess: true,
        registeredUserId: action.payload.registeredUserId,
        registrationStatusCode: action.payload.statusCode,
        regsitrationStatusMessage: action.payload.responseMessage
      }
    case REGISTER_USER_FAILURE:
      return {
        ...initialState,
        registrationStatusCode: action.payload.statusCode,
        // regsitrationStatusMessage: action.payload.errorMessage
      }
    default: return state
  }
}

export default reducer