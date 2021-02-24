import axios from 'axios'
import { 
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE 
} from './registerTypes'

const registerUserSuccess = response => {
  return {
    type: REGISTER_USER_SUCCESS,
    payload: response
  }
}

const registerUserError = error => {
  return {
    type: REGISTER_USER_FAILURE,
    payload: error
  }
}

export const registerUser = user => {
  return dispatch => {
    axios({
      method: 'post',
      url: '/users/',
      data: user
    })
    .then(response => {
      console.log(response);
      const responseMessage = response.data.message
      const registeredUserId = response.data.userId
      const statusCode = response.status
      dispatch(registerUserSuccess({registeredUserId, responseMessage, statusCode}))
    })
    .catch(error => {
      console.log(error);
      // const errorMessage = error.repsonse.message
      const statusCode = error.response.status
      dispatch(registerUserError({ statusCode}))
    })
  }
}