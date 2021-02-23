import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  progressBarOuter: {
    width: '100%',
    height: '5px',
    backgroundColor: theme.palette.secondary.light,
    borderRadius: '999px'
  },
  progressBarInner: {
    width: '40%',
    height: '100%',
    backgroundColor: theme.palette.primary.main,
    borderRadius: '999px'
  }
}))

function DonationsProgressBar() {
  const classes = useStyles()

  return (
    <div className={classes.progressBarOuter}>
      <div className={classes.progressBarInner}></div>
    </div>
  )
}

export default DonationsProgressBar
