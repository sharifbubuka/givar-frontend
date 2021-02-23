import React, { useState} from 'react'
import LoginForm from './LoginForm'
import { makeStyles } from '@material-ui/core/styles'
import SecondaryFooter from '../SecondaryFooter'
import SecondaryHeader from '../SecondaryHeader'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  }
}))

function LoginPage(props) {

  const classes = useStyles()
  return (
    <main className={classes.root}>
      <SecondaryHeader path='/register' label='Sign up' />

      <LoginForm userKnowsPassword={true} />

      <SecondaryFooter />
    </main>
  )
}

export default LoginPage

