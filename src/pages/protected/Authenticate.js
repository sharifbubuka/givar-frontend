import React, {useEffect} from 'react'
import decode from 'jwt-decode'
import { Redirect, Route } from 'react-router-dom'
import {connect} from 'react-redux'

function Authenticate({ component: Component, user, ...rest }) {
  useEffect(() => {
    return
  }, [user.authenticated])

  return (
    <Route {...rest} render={props =>(
      user.authenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/login', state: {from: props.location} }} />
      )
    )}
    />
  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Authenticate)

// class Auth {
//   constructor() {
//     this.authenticated = false
//   }

//   login(callback) {
//     this.authenticated = true
//     callback()
//   }

//   logout(callback) {
//     this.authenticated = false
//     callback()
//   } 

//   isAuthenticated() {
//     return this.authenticated
//   }
// }

// export default new Auth()
