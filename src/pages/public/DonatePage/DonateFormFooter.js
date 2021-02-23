import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  terms: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.dark,
    textAlign: 'center',
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(1),
    fontSize: '0.9rem'
  }
}))

function DonateFormFooter() {
  const classes = useStyles()

  return (
    <div className={classes.terms}>
      The beneficiaries will receive your donation directly. <br />
      Donations are processed by the MTN Momo api. <br />
      Learn more from our <Link to='/djfdk'>Terms of Service</Link>.
    </div>
  )
}

export default DonateFormFooter
