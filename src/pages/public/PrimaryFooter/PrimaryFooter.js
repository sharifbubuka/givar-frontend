import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import FooterForm from './PrimaryFooterForm'
import RouterLink from '../../../components/RouteLink'
import ExternalLink from '../../../components/ExternalRouterLink'
import MTN_LOGO from '../../../assets/images/vector/mtn-logo.svg'



const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: 'fit-content'
  },
  footer: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    marginTop: theme.spacing(13),
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      justifyContent: 'space-around',
      marginTop: theme.spacing(1),
    }
  },
  contactBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    top: theme.spacing(-12),
    [theme.breakpoints.up('md')]: {
      top: theme.spacing(1)
    }
  },
  partners: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  mtnLogo: {
    width: '150px',
    marginTop: '-20px'
  },
  footerLinks: {
    marginTop: theme.spacing(-12),
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(1)
    }
  },
  links: {
    padding: theme.spacing(0),
    marginTop: theme.spacing(-2),
  },
  link: {
    listStyle: 'none',
    fontSize: '.9rem'
  }

}))

const footerSections = [
  {
    title: 'About',
    links: [
      {external: false, path: '/concept-paper', text: 'Concept Paper'},
      {external: false, path: '/careers', text: 'Join us'},
      {external: false, disabled: true, path: '/blog', text: 'Blog'},
    ]
  },
  {
    title: 'Reach Out',
    links: [
      {external: true, path: 'https://cis.mak.ac.ug/', text: 'Makerere University'},
      {external: true, path: 'https://github.com/sharifbubuka/recess-fundraising-project', text: 'Github Repository'},
      {external: true, path: 'mailto:bubukasharif.work@gmail.com', text: 'Send an Email'}
    ]
  }
]

function PrimaryFooter() {
  const classes = useStyles()
  return (
    <footer className={classes.root}>
      <Grid className={classes.footer} xs={12}>
          <Grid xs={12} md={4} className={classes.contactBox}>
            <FooterForm />
            <div className={classes.partners}>
              <h5>Supported By</h5>
              <img className={classes.mtnLogo} src={MTN_LOGO} alt="The MTN logo. MTN is our payments partner. Go to https://www.mtn.co.ug/ to learn more." />
            </div>
          </Grid>
          <Grid xs={12} md={5} className={classes.footerLinks}>
            {
              footerSections.map((footerSection, index) => (
                <Grid key={index} className={classes.linksSection}>
                  <h4>{footerSection.title}</h4>
                  <ul className={classes.links}>
                    {
                      footerSection.links.map((link, index) => (
                        <li key={index} className={classes.link}>
                          {
                            link.external ? (<ExternalLink location={link.path} text={link.text} />) : (<RouterLink key={index} to={link.path}>{link.text}</RouterLink> )
                          }
                        </li>
                      ))
                    }
                  </ul>
                </Grid>
              ))
            }
          </Grid>
      </Grid>
    </footer>
  )
}

export default PrimaryFooter
