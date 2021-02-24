import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  terms: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
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
      Learn more from our <Link to='/djfdk'><span style={{color: 'white', textDecoration: 'none'}}>Terms of Service</span></Link>.
    </div>
  )
}

export default DonateFormFooter
