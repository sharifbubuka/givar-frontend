import { Avatar, Container, Grid } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom"
import ProjectPageHeader from './ProjectPageHeader'
import { makeStyles } from '@material-ui/core/styles'
import  { FiShare2 } from 'react-icons/fi'
import { BiDonateHeart } from 'react-icons/bi'
import axios from 'axios'
import store from 'store'
import DonationsProgressBar from '../../../components/DonationsProgressBar'
import SocialShareModal from '../../../containers/SocialShareModal'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(0),
    display: 'flex',
    flexDirection: 'column'
  },
  projectWrapper: {
    backgroundColor: theme.palette.secondary.light,
    padding: theme.spacing(2),
    color: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      
    }
  },
  projectTitle: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(1)
  },
  mainImageBox: {
    height: '300px',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      maxWidth: '57%',
      maxHeight: '300px'
    }
  },
  mainImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '5px'
  },
  headerWrapper: {
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      justifyContent: 'space-between'
      
    }
  },
  projectInfoBox: {
    [theme.breakpoints.up('sm')]: {
      maxWidth: '40%',
      position: 'relative',
      display: 'flex'
    }
  },
  projectInfo: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'pink',
    padding: theme.spacing(1),
    borderRadius: '5px',
    [theme.breakpoints.up('sm')]: {
      position: 'absolute',
      width: '96%'
    }
  },
  fundraiserCurrentStats: {
    fontSize: '0.9rem',
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(0.5)
  },
  currentBox: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    [theme.breakpoints.up('md')]: {
      fontWeight: 900
    }
  },
  current: {
    fontSize: '1.1rem',
    fontWeight: 900
  },
  targetBox: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  shareButtons: {
    display: 'flex',
    flexDirection: 'column',
    width: '80%',
    alignSelf: 'center',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  shareButtonsBottom: {
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0 auto'
  },
  donateLink: {
    textDecoration: 'none',
    marginTop: theme.spacing(1),
  },
  donateLinkBottom: {
    textDecoration: 'none',
    marginTop: theme.spacing(1)
  },
  shareButtonBottom: {
    padding: '12px 50px',
    textTransform: 'capitalize',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1.2rem',
    fontWeight: 700,
    width: '100%',
    maxWidth: '300px',
    minWidth: '300px',
    backgroundColor: theme.palette.secondary.light,
    color: 'white',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    '&:focus': {
      border: 'none',
      outline: 'none'
    }
  },
  shareButton: {
    padding: '12px 50px',
    textTransform: 'capitalize',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1.2rem',
    fontWeight: 700,
    width: '100%',
    maxWidth: '300px',
    backgroundColor: theme.palette.secondary.light,
    color: 'white',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    '&:focus': {
      border: 'none',
      outline: 'none'
    }
  },
  shareButtonIcon: {
    position: 'absolute',
    left: theme.spacing(1)
  },
  projectDescription: {
    backgroundColor: 'pink',
    padding: theme.spacing(1),
    marginTop: theme.spacing(2),
    borderRadius: '5px',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '57%',
      position: 'relative',
      // top: theme.spacing(-21)
    }
  },
  contacts: {
    backgroundColor: 'red',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: '80%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-around'
  }
}))

function ProjectPage(props) {
  const classes = useStyles()
  const { id } = useParams()
  const [ fundraiser, setFundraiser ] = useState(null)
  const [ fundraiserOwner, setFundraiserOwner ] = useState(null)

  // useEffect(() => { 
  //   document.title = `Fundraiser: ${fundraiser.name}`
  // }, [])

  useEffect(() => {
    axios(`/fundraisers/${id}`)
      .then(response => {
        const fundraiser = response.data
        setFundraiser(fundraiser)
        document.title = `Fundraiser: ${fundraiser.name}`
        console.log('Fundraiser is:', fundraiser)
        axios.get(`/users/${fundraiser.ownerId}`)
          .then(response => {
            const owner = response.data
            setFundraiserOwner(owner)
            console.log('User is: ' , owner)
          })
          .catch(error => {
            console.log('Failed to get the fundraiser owner from the db.')
          })
      })
      .catch(error => {
        console.log('Failed to get the fundraiser from the db.')
      })
  }, [])

  if (fundraiser && fundraiserOwner){ 
    return (
    <Container maxWidth={'xl'} className={classes.root}>
      <ProjectPageHeader />
        <Container maxWidth={'md'} className={classes.projectWrapper}>
          
          <Grid xs={12} className={classes.headerWrapper}>
            <Grid item xs={12} md={12} className={classes.mainImageBox}>
              <img className={classes.mainImage} src='https://images.gofundme.com/lfIDh3DRXXBf1GKOXJJ_v04_-y8=/720x405/https://d2g8igdw686xgo.cloudfront.net/53335284_1608117907238589_r.jpeg' alt='smiling children' />
            </Grid>
            <Grid item xs={12} component='section' className={classes.projectInfoBox}>
              <div className={classes.projectInfo}> 
                <div className={classes.infoTop}>
                  <h1 className={classes.projectTitle}>{fundraiser.name}</h1>
                  <p className={classes.fundraiserCurrentStats}>
                    <span className={classes.currentBox}><span className={classes.current}>{`${fundraiser.stats.currency}. ${fundraiser.stats.current}`}</span> raised</span>
                    <span className={classes.targetBox}> of {`${fundraiser.stats.currency}. ${fundraiser.stats.target}`}</span>
                  </p>
                  <DonationsProgressBar />
                </div>
                <div className={classes.shareButtons}>
                  <SocialShareModal>
                    <button className={classes.shareButton}>
                      <FiShare2 className={classes.shareButtonIcon} size={25} />
                      Share
                    </button>
                  </SocialShareModal>
                  <Link to={{
                    pathname: `/fundraiser/donate/${id}`,
                    state: fundraiser
                  }} className={classes.donateLink}>
                    <button className={classes.shareButton}>
                      <BiDonateHeart className={classes.shareButtonIcon} size={25} />
                      Donate
                    </button>
                  </Link>
                </div>
                <div className={classes.funders}>
                  <ul className={classes.fundersList}>
                    {fundraiser.stats.funders.map((funder, index) => (
                      <li key={index}>
                        <div>
                          <Avatar />
                        </div>
                        <div>
                          <div className={classes.funderRightTop}></div>
                          <div className={classes.funderRightBottom}>
                            <span className={classes.funderDonation}>
                              {`${fundraiser.stats.currency} ${funder.donation}`}
                            </span>
                            {/* <span className={classes.funderDonationDate}>
                              {`${funder.time.split(',')[0]}`}
                            </span> */}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className={classes.fundersButtons}>
                    <button className={classes.fundersButton}>See all</button>
                    <button className={classes.fundersButton}>See top funders</button>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
          <Grid item className={classes.projectDescription} xs={12} md={6}>
            <div className={classes.mainDescription}>
              <div className={classes.mainDescriptionLeft}>{fundraiser.story}</div>
              <div className={classes.mainDescriptionRight}>
                <h3>{`${fundraiserOwner.firstName} ${fundraiserOwner.lastName}`}</h3>
                {/* {project.organization ? <h4>Organization Name</h4> : <></>} */}
              </div>
            </div>
            <div className={classes.shareButtonsBottom}>
              <button className={classes.shareButtonBottom}>
                  <FiShare2 className={classes.shareButtonIcon} size={25} />
                  Share
              </button>
              <Link to={{pathname: `/fundraiser/donate/${id}`, state: fundraiser}} className={classes.donateLink}>
                <button className={classes.shareButtonBottom}>
                  <BiDonateHeart className={classes.shareButtonIcon} size={25} />
                  Donate
                </button>
              </Link>
            </div>
            <div className={classes.contacts}>
              <button className={classes.mediumButton}>Send Message</button>
              <button className={classes.mediumButton}>Request number</button>
            </div>
            <div className={classes.descriptionFooter}>
              <span>Created 3 January, 2021</span>
              {/* <span>{project.projectDescription.category}</span> */}
            </div>
          </Grid>
      </Container> 
    </Container>
  )} else {
    return (<h1>LOADING...</h1>)
  }
} 

export default ProjectPage
