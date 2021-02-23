import React, {useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import SecondaryFooter from '../SecondaryFooter'
import SecondaryHeader from '../SecondaryHeader'
import RegisterForm from './RegisterForm'
import {connect} from 'react-redux'

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
  }
}))

function RegisterPage({user}) {
  const classes = useStyles()
  const history = useHistory()

  useEffect(() => {
    if (user.authenticated)
      history.push('/dashboard')
  }, [user.authenticated])
  
  return (
    <main className={classes.root}>
      <SecondaryHeader path='/login' label='Login' />

      <RegisterForm />

      <SecondaryFooter />
    </main>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(RegisterPage)
