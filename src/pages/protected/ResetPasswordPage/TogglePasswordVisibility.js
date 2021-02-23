import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { VscEyeClosed, VscEye } from 'react-icons/vsc'

function TogglePasswordVisibility({ passwordVisible,errorState, ...others }) {
  const color = errorState ? 'rgba(220, 46, 39, 1)' : 'rgba(60, 50, 115, 1)'

  const useStyles = makeStyles(theme => ({
    root: {
      color: color,
      cursor: 'pointer'
    }
  }))

  const classes = useStyles()
  return (
    <div>
      {passwordVisible ? <VscEyeClosed {...others} className={classes.root} /> : <VscEye {...others} className={classes.root} />}
    </div>
  )
}

export default React.memo(TogglePasswordVisibility)
