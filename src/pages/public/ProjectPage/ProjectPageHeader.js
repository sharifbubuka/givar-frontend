import { Container } from '@material-ui/core'
import React, {useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import RouterLink from '../../../components/RouteLink'
import { BiLogIn } from 'react-icons/bi'
import {connect} from 'react-redux'
import LogoutUser from '../../../containers/LogoutUser'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  logo: {
    letterSpacing: theme.spacing(0.7),
    fontSize: '1.9rem',
    height: 'fit-content',
    margin: theme.spacing(2),
  },
  headerRight: {
    display: 'flex',
    alignItems: 'center'
  },
  groupedLink: {
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1),
    paddingRight: theme.spacing(1),
    borderRight: '2px solid white'
  },
  headerLinkIcon: {
    color: 'white'
  },
  logout: {
    color: 'white'
  }
}))

function ProjectPageHeader({user}) {
  const classes = useStyles()

  useEffect(() => {
    return
  }, [user.authenticated])

  return (
    <nav className={classes.root}>
      <Container maxWidth={'lg'} className={classes.header}>
        <RouterLink to='/'><h5 className={classes.logo}>GIVAR</h5></RouterLink>
        <div className={classes.headerRight}>
          {!user.authenticated === true ? 
          (<>
            <span className={classes.groupedLink}>
            <BiLogIn size={23} className={classes.headerLinkIcon} />
            <RouterLink to='/register'>Sign up</RouterLink>
          </span>
          <RouterLink to='/login'>Login</RouterLink>
          </>) : 
          (<>
          <LogoutUser className={classes.logout}>
            Logout
          </LogoutUser>
          </>)}
        </div>
      </Container>
    </nav>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(ProjectPageHeader)
