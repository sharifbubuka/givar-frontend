import React, {useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Ticker from '../../../components/Ticker'
import { Container } from '@material-ui/core'
import { BiLogIn } from 'react-icons/bi'
import RouterLink from '../../../components/RouteLink'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import LogoutUser from '../../../containers/LogoutUser'
import Button from '../../../components/Button'

const useStyles = makeStyles(theme => ({
  header: {
    minHeight: 'fit-content',
    backgroundColor: theme.palette.primary.main,
    color: 'white'
  },
  topTicker:  {
    paddingTop: theme.spacing(0)
  },
  topHeader: {
    width: '100%',
    backgroundColor: theme.palette.secondary.main,

  },
  tickerMessage: {
    padding: theme.spacing(0),
    margin: theme.spacing(0.5),
    overFlow: 'hidden',
    whiteSpace: 'nowrap'
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    letterSpacing: theme.spacing(0.7),
    fontSize: '1.9rem',
    height: 'fit-content',
    margin: theme.spacing(0),
  },
  headerLinks: {
    display: 'flex',
    alignItems: 'center',
    width: 'fit-content',
    height: 'fit-content',
  },
  headerLink: {
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
    marginLeft: theme.spacing(1),
    fontSize: '0.95rem'
  },
  headerLinkLogin: {
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
    fontSize: '0.95rem',
    borderRight: '2px solid white',
    paddingRight: theme.spacing(1)
  },
  headerLinkIcon: {
    marginRight: theme.spacing(0.5)
  }
}))

const links = [
  {
    path: '/login',
    text: 'Login',
  },
  {
    path: '/register',
    text: 'Sign up'
  }
]

function PrimaryHeader({user}) {
  const classes = useStyles()

  useEffect(() => {
    return
  }, [user.authenticated])

  return (
    <header className={classes.header}>
        {/* top header with ticker */}
        {/* bottom header */}
        <div className={classes.topHeader}>
        <Container maxWidth='md' className={classes.topTicker}>
          <Ticker 
            speed={2} 
            message={'Note! This project is still under development'} 
            mode='await'>
              <p className={classes.tickerMessage}>Note! This project is still under development! Any feedback on bugs or defeciencies will be highly appreciated. </p>
            </Ticker>
        </Container>
        </div>
        
        <Container maxWidth='md'>
          <nav className={classes.nav}>
            <RouterLink to='/'><h5 className={classes.logo}>GIVAR</h5></RouterLink>
            <ul className={classes.headerLinks}>
              {!user.authenticated ? links.map((link, index) => {
                  if (index === 0) {
                    return (
                        <li className={classes.headerLinkLogin}>
                          <BiLogIn size={23} className={classes.headerLinkIcon} />
                          <RouterLink to={link.path}>{link.text}</RouterLink>
                        </li>
                    )
                  } else {
                    return (
                      <li className={classes.headerLink}>
                        <RouterLink to={link.path}>{link.text}</RouterLink>
                      </li>
                    )
                  }
              }) : 
              (<LogoutUser>
                <Button style={{padding: '3px 11px'}}>Logout</Button>
              </LogoutUser>)}
            </ul>
          </nav>
        </Container>
    </header>
  )
}
const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(PrimaryHeader)
