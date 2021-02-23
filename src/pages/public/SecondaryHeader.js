import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import RouterLink from '../../components/RouteLink'
import { Container } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  nav: {
    backgroundColor: theme.palette.primary.main,
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

function SecondaryHeader({user, ...props}) {
  
  const classes = useStyles()

  return (
    <nav className={classes.nav}>
      <Container maxWidth={'md'} className={classes.nav}>
        <div>
          <RouterLink to='/'>
            <h3 className={classes.logo}>GIVAR</h3>
          </RouterLink>
        </div>

        <div className={classes.navRight}>
          <span className={classes.navRightText}>{props.label === 'Sign up' ? 'Do not have an account?': 'Already have an account?'}</span>
          <RouterLink to={props.path}>{props.label}</RouterLink>
        </div>
      </Container>
    </nav>
  )
}

export default SecondaryHeader
