import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Slider from 'react-slick'
import LogoutUser from '../../../containers/LogoutUser'
import volunteerBanner1 from '../../../assets/images/raster/volunteer_banner1.jpg'
import { Link } from 'react-router-dom'
import Button from '../../../components/Button'
import { Container } from '@material-ui/core'
import { GiBinoculars } from 'react-icons/gi'

const useStyles = makeStyles(theme => ({
  header: {
    height: '250px',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      height: '350px'
    },
    [theme.breakpoints.up('md')]: {
      height: '450px'
    },
    [theme.breakpoints.up('lg')]: {
      height: '550px'
    },
    backgroundImage: `url(${'https://d25oniaj7o2jcw.cloudfront.net/hero-emergency-large-20190213.jpg'})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  },
  nav: {
    display: 'flex',
    height: 'fit-content',
    justifyContent: 'space-between',
    alignItems: 'start',
    color: 'white',
    padding: theme.spacing(0),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    zIndex: '2'
  },
  navLeft: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '30px',
    padding: theme.spacing(0)
  },
  navListItem: {
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navListItemLink: {
    textDecoration: 'none',
    paddingRight: theme.spacing(1),
    fontSize: '0.9rem',
    color: 'white'
  },

  navRight: {
    display: 'flex',
    alignItems: 'center'
  },
  navRightListItemLink: {
    textDecoration: 'none'
  },
  logout: {
    margin: 0,
    fontSize: '0.9rem',
    cursor: 'pointer'
  },
  headerText: {
    // backgroundColor: 'red',
    color: 'white',
    display: 'flex',
    marginTop: theme.spacing(-7),
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(0),
    paddingLeft: theme.spacing(2),
    flex: 1
  },
  headerTitle: {
    margin: theme.spacing(0),
    marginBottom: theme.spacing(0.5),
    [theme.breakpoints.up('sm')]: {
      fontSize: '3rem'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '4rem'
    },
    [theme.breakpoints.up('lg')]: {
      marginBottom: theme.spacing(1.5)
    }
  },
  headerSubTitle: {
    margin: theme.spacing(0),
    marginBottom: theme.spacing(2),
    fontSize: '1.2rem',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.5rem'
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2rem'
    },
    [theme.breakpoints.up('lg')]: {
      marginBottom: theme.spacing(4)
    }
  },
  headerCallToAction: {
    display: 'flex'
  },
  headerMainLink: {
    textDecoration: 'none',
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('lg')]: {
      marginRight: theme.spacing(4)
    }
  },
  headerMainLinkBtn: {
  },
  callToActionRight: {
    display: 'flex',
    alignItems: 'center'
  },
  iconCircle: {
    width: '20px',
    height: '20px',
    padding: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid white',
    borderRadius: '50%',
    marginRight: theme.spacing(0.5),
    [theme.breakpoints.up('lg')]: {
      marginRight: theme.spacing(2)
    }
  },
  icon: {
    color: 'white',
    fontSize: '1.5rem'
  },
  headerSubMainLink: {
    textDecoration: 'none',
    color: 'white',
    '&:hover': {
      textDecoration: 'underline'
    }
  }
}))

function DashBoardHeader() {
  const classes = useStyles()

  return (
    <div className={classes.header}>
      <Container component='nav' maxWidth='md' className={classes.nav}>
        <ul className={classes.navLeft}>
          <li className={classes.navListItem}>
            <Link className={classes.navListItemLink} to='/fundraisers' >Fundraisers</Link>
          </li>
          <li className={classes.navListItem}>
            <Link className={classes.navListItemLink} to='/blog' >Blog</Link>
          </li>
        </ul>

        <ul className={classes.navRight}>
          <li className={classes.navListItem}>
            <LogoutUser>
              <h5 className={classes.logout}>
                <Button style={{padding: '5px 11px', fontSize: '0.7rem'}}>Logout</Button>
              </h5>
            </LogoutUser>
          </li>
        </ul>
      </Container>

      <Container maxWidth={'md'} className={classes.headerText}>
        <h1 className={classes.headerTitle}>Give and Make Believe</h1>
        <h2 className={classes.headerSubTitle}>Start Giving Today, with GIVAR</h2>
        <div className={classes.headerCallToAction}>
          <Link className={classes.headerMainLink} to='/create'>
            <Button>Create A Givar</Button>
          </Link>
          <div className={classes.callToActionRight}>
            <div className={classes.iconCircle}>
              <GiBinoculars className={classes.icon} />
            </div>
            <Link className={classes.headerSubMainLink}>
              See How Givar Works
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default DashBoardHeader
