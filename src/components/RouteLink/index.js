import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    textDecoration: 'none',
    color: 'white',
    margin: theme.spacing(0),
    backgroundColor: 'marron',
    width: 'fit-content',
    height: 'fit-content',
    '&:visited': {
      color: 'white'
    },
    '&:focus': {
      color: 'white'
    },
    '&:active': {
      color: 'white'
    },
  }
}))

function RouterLink(props) {
  const classes = useStyles()
  const { to } = props
  return (
    <Link to={to} className={classes.root} {...props}>{props.children}</Link>
  )
}

export default RouterLink
