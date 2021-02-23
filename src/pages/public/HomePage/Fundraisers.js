import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Container, Grid, useMediaQuery } from '@material-ui/core'
import DonationsProgressBar from '../../../components/DonationsProgressBar'
import { Link } from 'react-router-dom'
import { AiOutlineRight } from 'react-icons/ai'

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: 'fit-content',
    padding: theme.spacing(2),
    color: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column'
  },
  fundraisersTitle: {

  },
  fundraisers: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap'

  },
  fundraiser: {
    width: '47%',
    [theme.breakpoints.up('sm')]: {
      width: '32%'
    }
  },
  fundraiserHeader: {
    display: 'flex',
    flexDirection: 'column',
    height: 'fit-content',
    textDecoration: 'none',
    color: theme.palette.primary.main,
    '&:focus': {
      color: theme.palette.primary.main
    }
  },
  fundraiserprimaryImageBox: {
    width: '100%',
    height: '120px',
    [theme.breakpoints.up('sm')]: {
      height: '150px'
    }
  },
  fundraiserPrimaryImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '5px'
  },
  fundraiserLocation: {
    margin: theme.spacing(0),
    marginTop: theme.spacing(1),
    color: theme.palette.success.main,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  fundraiserTitle: {
    margin: theme.spacing(0),
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(0.5),
    maxHeight: '50px',
    whiteSpace: 'wrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  fundraiserInfo: {
    // backgroundColor: 'cyan',
    marginTop: theme.spacing(-1)
  },
  fundraiserStory: {
    // backgroundColor: 'red',
    color: theme.palette.primary.light,
    height: 'fit-content',
    fontSize: '0.9rem', 
    [theme.breakpoints.down('sm')]: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  },
  donationProgressTime: {
    margin: theme.spacing(0),
    marginBottom: theme.spacing(0.5),
    fontSize: '0.8rem',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  fundraiserCurrentStats: {
    fontSize: '0.8rem'
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
    fontSize: '0.9rem',
    fontWeight: 900
  },
  targetBox: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  seeMore: {
    alignSelf: 'flex-end',
    display: 'flex',
    alignItems: 'center',
    fontSize: '0.9rem',
    color: theme.palette.primary.light,
    textDecoration: 'none',
    marginTop: theme.spacing(3)
  }
}))

  const truncateString = (str) => {
    return `${str.substring(0,60)}...`
  }

function Fundraisers(props) {
  const classes = useStyles()
  const projects = [...props.projects]
  const maxIndex = useMediaQuery(useTheme().breakpoints.down('xs')) ? 3 : 2

  return (
    <Container maxWidth={'md'} className={classes.root}>
      <h3 className={classes.fundraisersTitle}>Top fundraisers</h3>
      <Grid xs={12} className={classes.fundraisers}>
        {
          projects && projects.map((project, index) => {
            if (index >= 0 && index <= maxIndex)
            return (
              <div className={classes.fundraiser}>
                <Link to={{
                  pathname: `/fundraiser/${project._id}`,
                  state: project
                }} className={classes.fundraiserHeader}>
                  <div className={classes.fundraiserprimaryImageBox}>
                    <img className={classes.fundraiserPrimaryImage} src='https://images.gofundme.com/lfIDh3DRXXBf1GKOXJJ_v04_-y8=/720x405/https://d2g8igdw686xgo.cloudfront.net/53335284_1608117907238589_r.jpeg' alt='children smiling' />
                  </div>
                  <h3 className={classes.fundraiserLocation}>{project.country}</h3>
                  <h4 className={classes.fundraiserTitle}>{project.name}</h4>
                </Link>
                <div className={classes.fundraiserInfo}>
                  <p className={classes.fundraiserStory}>{truncateString(project.story)}</p>
                  <p className={classes.donationProgressTime}>Last donation 8s ago</p>
                  <DonationsProgressBar />
                  <p className={classes.fundraiserCurrentStats}>
                    <span className={classes.currentBox}><span className={classes.current}>{`${project.stats.currency}. ${project.stats.current}`}</span> raised</span>
                    <span className={classes.targetBox}> of {`${project.stats.currency}. ${project.stats.target}`}</span>
                  </p>
                </div>
              </div>
            )
            return null
          })
        }
      </Grid>
      <Link to='/fundraisers' className={classes.seeMore}>
        See More <AiOutlineRight className={classes.seeMoreIcon} />
      </Link>
    </Container>
  )
}

export default Fundraisers
