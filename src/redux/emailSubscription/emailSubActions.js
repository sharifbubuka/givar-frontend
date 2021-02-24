import axios from 'axios'
import { 
  SAVE_EMAIL_SUBSCRIBER_SUCCESS,
  SAVE_EMAIL_SUBSCRIBER_FAILURE
} from './emailSubTypes'

const saveEmailSubscriberSuccess = response => {
  return {
    type: SAVE_EMAIL_SUBSCRIBER_SUCCESS,
    payload: response
  }
}

const saveEmailSubscriberFailure = error => {
  return {
    type: SAVE_EMAIL_SUBSCRIBER_FAILURE,
    payload: error
  }
}

export const saveEmailSubscriber = emailSubscriber => {
  return dispatch => {
    axios({
      method: 'post',
      url: '/email_subscribers',
      data: emailSubscriber
    })
    .then(response => {
      console.log(response);
      dispatch(saveEmailSubscriberSuccess(response.data))
    })
    .catch(error => {
      console.log(error)
      dispatch(saveEmailSubscriberFailure(error.response.data))
    })
  }
}