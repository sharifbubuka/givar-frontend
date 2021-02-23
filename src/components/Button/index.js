import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.success.main,
    border: `1px solid ${theme.palette.success.main}`,
    fontFamily: theme.typography.fontFamily,
    boxShadow: 'none',
    borderRadius: '4px',
    padding: '7px 15px',
    color: 'white',
    cursor: 'pointer',
    margin: theme.spacing(0),
    transition: 'all 100ms ease 0s',
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
      border: `1px solid ${theme.palette.secondary.dark}`
    }
  }
}))

function CustomButton(props) {
  const classes = useStyles()
  return (
    <Button className={classes.root} {...props}>{props.children}</Button>
  )
}

export default CustomButton
