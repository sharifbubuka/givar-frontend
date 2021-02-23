import axios from 'axios'
import store from 'store'
import { 
  LOGIN_USER_SUCCESS, 
  LOGOUT_USER, 
  LOGIN_USER_FAILURE,
} from './userTypes'

export const loginUserSuccess = ({user, auth}) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: {
      user,
      auth
    }
  }
}

export const loginUserFailure = errorStatusCode => {
  return {
    type: LOGIN_USER_FAILURE,
    payload: errorStatusCode
  }
}

export const logoutUser = () => {
  store.remove('auth')
  return {
    type: LOGOUT_USER
  }
}

export const fetchUser = ({email, password}) => {
  return dispatch => {
    axios({
      method: 'post',
      url: 'http://127.0.0.1:4000/users/login',
      data: {
        email: email,
        password: password
      }
    })
    .then(response => {
      const user = response.data
      store.set('auth', user.auth)
      const auth = store.get('auth')
      dispatch(loginUserSuccess({user, auth}))
    })
    .catch(error => {
      const errorStatusCode = error.response.status
      // console.log(error);
      dispatch(loginUserFailure(errorStatusCode))
    })
  }
}