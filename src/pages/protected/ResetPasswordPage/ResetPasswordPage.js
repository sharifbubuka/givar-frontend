import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import RouterLink from '../../../components/RouteLink/'
import ResetPasswordForm from './ResetPasswordForm'
import SecondaryFooter from '../../public/SecondaryFooter'
import { Container } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  header: {
    backgroundColor: theme.palette.primary.main,
  },
  nav: {
    height: 'fit-content',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white'
  },
  logo: {
    letterSpacing: '0.15rem'
  },
  navRight: {
    fontSize: '0.9rem'
  },
  navRightText: {
    marginRight: theme.spacing(1)
  }
}))

function LoginPage() {
  const classes = useStyles()
  return (
    <main className={classes.root}>
      <nav className={classes.header}>
        <Container maxWidth={'md'} className={classes.nav}>
        <div className={classes.navLeft}>
          <h3 className={classes.logo}>goFundMe</h3>
        </div>

        <div className={classes.navRight}>
          <span className={classes.navRightText}>Remembered your password?</span>
          <RouterLink to='/login'>Log in</RouterLink>
        </div>
        </Container>
      </nav>

      <ResetPasswordForm />

      <SecondaryFooter />
     
    </main>
  )
}

export default LoginPage
