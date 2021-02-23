import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import PageNotFoundSVG from '../../assets/images/vector/PageNotFound.svg'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    maxHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: theme.spacing(5),
    alignItems: 'center',
    justifyContent: 'center'
  },
  svg: {
    height: '80vh',
    width: '90%'
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  linkText: {
    margin: 0
  }
}))

function NotFound() {
  const classes = useStyles()

  return (
    <main className={classes.root}>
      <img className={classes.svg} src={PageNotFoundSVG} alt='dhdh' />
      <Link to='/' className={classes.link}>
        <h1 className={classes.linkText}>Go Hard or Go Home</h1>
      </Link>
    </main>
  )
}

export default NotFound
