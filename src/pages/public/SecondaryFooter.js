import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  footer: {
    width: '100%',
    backgroundColor: theme.palette.primary.main
  },
  footerBox: {
    display: 'flex',
    justifyItems: 'center',
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    maxWidth: '600px'
  },
  footerTerms: {
    padding: theme.spacing(2),
    textAlign: 'center',
    fontSize: '0.8rem',
    color: 'white'
  }
}))

function SecondaryFooter() {
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <Container maxWidth={'md'} className={classes.footerBox}>
        <div className={classes.footerTerms}>
          Your access to and use of this Service confirms your acceptance of and compliance with our Terms and Conditions.
          These terms apply to all visitors, users and others who have access to or use this Service.
          If you disagree with any of the terms, don't access the Service.
        </div>
      </Container>
    </footer>
  )
}

export default SecondaryFooter
