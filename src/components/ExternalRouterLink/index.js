import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    textDecoration: 'none',
    // color: 'white'
  }
}))

function ExternalRouterLink(props) {
  const { location, component, text } = props
  const classes = useStyles()
  const redirect = () => {
    window.location.href = location
  }

  if (component) {
    return (
      <component {...props} onClick={redirect}>{text}</component>
    )
  } else {
    return (
      <a {...props} href={location} onClick={redirect} className={classes.root}>{text}</a>
    )
  }
}

export default ExternalRouterLink
