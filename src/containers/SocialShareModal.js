import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {GrClose} from 'react-icons/gr'
import {FaFacebook, FaTwitter, FaWhatsapp, FaRegEnvelope} from 'react-icons/fa'
import FacebookShareButton from '../containers/FacebookButton'
import TwitterShareButton from '../containers/TwitterButton'
import WhatsappShareButton from '../containers/WhatsappButton'
import EmailShareButton from '../containers/EmailShareButton'
import Button from '../components/Button'

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(6, 2, 1),
    color: theme.palette.primary.main,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '100%',
    height: '100vh',
    [theme.breakpoints.up('sm')]: {
      width: 'fit-content',
      height: 'fit-content',
      border: '1px solid #000',
    }
  },
  close: {
    cursor: 'pointer',
    alignSelf: 'flex-end',
    fontSize: '1.5rem'
  },
  mainTitle: {
    fontSize: '1.6rem',
    margin: theme.spacing(2,0,0.5,0)
  },
  subTitle: {
    margin: theme.spacing(2, 0, -0.5, 0)
  },
  mainSubTitle: {
    fontWeight: 900
  },
  socials: {
    display: 'flex',
    flexDirection: 'column',
    padding: 0
  },
  socialLink: {
    listStyle: 'none',
    padding: theme.spacing(1.2, 0),
    margin: theme.spacing(0 ,0, 1, 0),
    borderBottom: '1px solid '
  },
  shareBtn: {
    color: theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center'
  },
  shareIconFb: {
    color: '#4267B2',
    fontSize: '1.5rem',
    marginRight: theme.spacing(1)
  },
  shareIconTw: {
    color: '#1DA1F2',
    fontSize: '1.5rem',
    marginRight: theme.spacing(1)
  },
  shareIconWt: {
    color: '#25D366',
    fontSize: '1.5rem',
    marginRight: theme.spacing(1)
  },
  shareIconEm: {
    color: 'fff',
    fontSize: '1.5rem',
    marginRight: theme.spacing(1)
  },
  copyBox: {
    display: 'flex'
  },
  fundraiserPageLink: {
    fontSize: '0.9rem',
    marginRight: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0,1),
    border: '1px solid',
    boxSizing: 'border-box',
    '&:hover': {
      fontWeight: 900
    }
  }
}));

export default function TransitionsModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [copiedToClipboard, setCopiedToClipboard] = useState(false)

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const copyLinkToClipboard = () => {
    navigator.clipboard.writeText(`https://givar.com/fundraiser/78787787878`)
    setCopiedToClipboard(true)
    setTimeout(() => {
      setCopiedToClipboard(false)
    }, 4000);
  }

  return (
    <div>
      <span onClick={handleOpen}>
        {props.children}
      </span>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <GrClose className={classes.close} onClick={handleClose}/>
            <h1 className={classes.mainTitle}>Share and make believe</h1>
            <p className={classes.subTitle}><span className={classes.mainSubTitle}>Fun Fact:</span> Sharing a Fundraiser is a donation.</p>
            <ul className={classes.socials}>
              <li className={classes.socialLink}>
                <FacebookShareButton className={classes.shareBtn}>
                  <FaFacebook className={classes.shareIconFb} /> Facebook
                </FacebookShareButton>
              </li>
              <li className={classes.socialLink}>
                <TwitterShareButton className={classes.shareBtn}>
                  <FaTwitter className={classes.shareIconTw} /> Twitter
                </TwitterShareButton>
              </li>
              <li className={classes.socialLink}>
                <WhatsappShareButton className={classes.shareBtn}>
                  <FaWhatsapp className={classes.shareIconWt} /> Whatsapp
                </WhatsappShareButton>
              </li>
              <li className={classes.socialLink}>
                <EmailShareButton className={classes.shareBtn}>
                  <FaRegEnvelope className={classes.shareIconEm} /> Email
                </EmailShareButton>
              </li>
            </ul>
            <div className={classes.copyBox}>
              <div className={classes.fundraiserPageLink}>
                {`https://givar.com/fundraiser/78787787878`}
              </div>
              <Button onClick={copyLinkToClipboard} style={{padding: '4px 10px'}}>Copy Link</Button>
            </div>
            <p className={classes.clipboardSuccess}>{copiedToClipboard ? 'Copied Successfully' : ''}</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}