import React from 'react'
import  { AiOutlineMail } from 'react-icons/ai'
import { CgTimelapse } from 'react-icons/cg'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import  { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import ExternalRouterLink from '../../../components/ExternalRouterLink'
import TwitterButton from '../../../containers/TwitterButton'

const useStyles = makeStyles(theme => ({
  donateFormHeader: {
    backgroundColor: theme.palette.secondary.light,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    color: theme.palette.primary.main,
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(4),
      borderRadius: '10px'
    }
  },
  projectTitle: {
    color: theme.palette.primary.main,
    margin: theme.spacing(1),
    marginLeft: theme.spacing(0)
  },
  projectProfileImageBox: {
    width: '100%',
    // height: '250px',
  },
  projectProfileImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '10px'
  },
  projectStats: {
    display: 'flex',
    flexDirection: 'column',
    height: 'fit-content',
    backgroundColor: 'pink',
    padding: theme.spacing(1),
    borderRadius: '10px',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  current: {
    fontSize: '1.6rem',
    fontWeight: 900
  },
  target: {
    fontSize: '0.8rem',
    display: 'block'
  },
  targetInner: {
    fontWeight: 900
  },
  progressBarOuter: {
    width: '100%',
    height: '10px',
    borderRadius: '999px',
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(0.5),
    backgroundColor: theme.palette.secondary.light
  },
  progressBarInner: {
    height: '10px',
    width: '50%',
    borderTopLeftRadius: '999px',
    borderBottomLeftRadius: '999px',
    backgroundColor: theme.palette.primary.dark,
  },
  fundersStats: {
    margin: theme.spacing(0),
    display: 'flex',
    alignItems: 'center'
  },
  funders: {
    marginLeft: theme.spacing(1),
    fontSize: '0.8rem',
  },
  clockIcon: {
    '@global': {
      '@keyframes rotating': {
        from: {
          transform: 'rotate(0deg)'
        },
        to: {
          transform: 'rotate(360deg)'
        }
      }
    },
    animation: '$rotating 2s linear infinite'
  },
  projectOwnerDetails: {
    backgroundColor: 'pink',
    padding: theme.spacing(1),
    borderRadius: '10px',
    height: 'fit-content'
  },
  ownerName: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  profile: {
    display: 'flex',
    justifyContent: 'flex-start',
    marginBottom: theme.spacing(0),
  },
  ownerProfileImageBox: {
    width: '60px',
    height: '60px',
  },
  ownerProfileImage: {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    objectFit: 'cover'
  },
  profileRight: {
    marginLeft: theme.spacing(2),
    display: 'flex',
    height: 'fit-content',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  emailBox: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '5px'
  },
  emailIcon: {
    marginRight: theme.spacing(1),
    color: theme.palette.primary.main
  },
  sendEmailButton: {
    backgroundColor: theme.palette.primary.main,
    border: `1px solid ${theme.palette.primary.main}`,
    boxShadow: 'none',
    borderRadius: '4px',
    color: 'white',
    padding: '2px 8px',
    cursor: 'pointer',
    '&:focus': {
      border: `1px solid ${theme.palette.primary.main}`,
      outline: 'none'
    }
  },
  socialMediaBox: {
    // backgroundColor: 'red',
    display: 'flex'
  },
  socialIconBoxFacebook: {
    marginRight: theme.spacing(1),
    backgroundColor: '#4267B2',
    color: 'white', 
    fontSize: '0.8rem',
    borderRadius: '4px',
    padding: '1px 5px',
    cursor: 'pointer'
  },
  socialIconBoxTwitter: {
    backgroundColor: '#1DA1F2',
    color: 'white',
    fontSize: '0.8rem',
    borderRadius: '4px',
    padding: '1px 5px',
    cursor: 'pointer'
  },
  beneficiaryProfile: {
    marginTop: theme.spacing(2),
    paddingTop: theme.spacing(0.5),
    maxHeight: 'fit-content',
    borderTop: '1px solid rgba(87, 62, 222, 0.3)'
  },
  beneficiariesHeader: {
    margin: theme.spacing(0)
  },
  beneficiaryName: {
    margin: theme.spacing(0)
  },
  beneficiaryWebsite: {
    fontSize: '0.80rem'
  }

}))

function DonateFormHeader({fundraiser, fundraiserOwner}) {
  const classes = useStyles()
  return (
    <div className={classes.donateFormHeader}>
      <h2 className={classes.projectTitle}>{fundraiser.name}</h2>
      <div className={classes.projectProfileImageBox}>
        <img 
          src='https://images.gofundme.com/lfIDh3DRXXBf1GKOXJJ_v04_-y8=/720x405/https://d2g8igdw686xgo.cloudfront.net/53335284_1608117907238589_r.jpeg' 
          alt='profile'
          className={classes.projectProfileImage} />
      </div>
      <div className={classes.projectStats}>
        <div className={classes.fundingStats}>
          <span className={classes.current}>{`${fundraiser.stats.currency}. ${fundraiser.stats.current}`}</span>
          <span className={classes.target}> of <span className={classes.targetInner}></span>{`${fundraiser.stats.currency}. ${fundraiser.stats.target}`}</span>
        </div>
        <div className={classes.progressBarOuter}>
          <div className={classes.progressBarInner}></div>
        </div>
        <p className={classes.fundersStats}>
          <CgTimelapse className={classes.clockIcon} /> 
          <span className={classes.funders}>{`Raised by ${fundraiser.stats.funders.length} people in 16 months`}</span>
        </p>
      </div>

      <div className={classes.projectOwnerDetails}>
        <h3 className={classes.ownerName}>{`About ${fundraiserOwner.firstName} ${fundraiserOwner.lastName}`}</h3>
        <div className={classes.profile}>
          <div className={classes.ownerProfileImageBox}>
            <img 
              className={classes.ownerProfileImage} 
              src='data:image/jpeg;base64,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' 
              alt='/profile of user' 
            />
          </div>
          <div className={classes.profileRight}>
            <div className={classes.emailBox}>
              <AiOutlineMail size={28} className={classes.emailIcon} />
              <button className={classes.sendEmailButton}>
                Send Email
              </button>
            </div>
            <div className={classes.socialMediaBox}>
              <div className={classes.socialIconBoxFacebook}>
                Facebook 
                {/* <FaFacebookF size={12} className={classes.socialIcon} />  */}
              </div>
              <TwitterButton>
              <div className={classes.socialIconBoxTwitter}>
                Twitter 
                {/* <FaTwitter size={12} className={classes.socialIcon} /> */}
              </div>
              </TwitterButton>
            </div>
          </div>
        </div>
        <div className={classes.beneficiaryProfile}>
          <h4 className={classes.beneficiariesHeader}>Beneficiaries of this campaign</h4>
          <h5 className={classes.beneficiaryName}>Masaka Kids School</h5>
          <small className={classes.beneficiaryWebsite}>www.masakakidsschool.com</small>
        </div>
      </div>
    </div>
  )
}

export default DonateFormHeader
