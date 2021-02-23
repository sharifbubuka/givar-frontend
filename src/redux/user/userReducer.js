import store from 'store'
import { 
  LOGIN_USER_SUCCESS, 
  LOGOUT_USER, 
  LOGIN_USER_FAILURE 
} from './userTypes'

// const auth = store.set('auth', false)
const initialState = {
  authenticated: store.get('auth') || false,
  accessToken: '',
  refreshToken: '',
  errorStatusCode: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS: 
      return {
        authenticated: action.payload.auth,
        accessToken: action.payload.user.accessToken,
        refreshToken: action.payload.refreshToken,
        errorStatusCode: null
      }
    case LOGIN_USER_FAILURE: 
      return {
        ...state,
        errorStatusCode: action.payload
      }
    case LOGOUT_USER:
      return initialState
  default: return state
  }
}

export default reducer