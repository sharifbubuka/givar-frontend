import React from 'react'
import {connect} from 'react-redux'
import {logoutUser as logUserOut} from '../redux/user/userActions'

function logoutUser({user, logout, children,...rest}) {
  return (
    <span {...rest} onClick={logout} style={{cursor: 'pointer'}}>
      {children}
    </span>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logUserOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(logoutUser)
