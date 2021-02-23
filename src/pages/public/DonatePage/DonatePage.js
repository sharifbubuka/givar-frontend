import { Container, Grid } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DonateForm from './DonateForm'
import DonateFormHeader from './DonateFormHeader'
import DonateFormFooter from './DonateFormFooter'
import ProjectPageHeader from '../ProjectPage/ProjectPageHeader'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'
import store from 'store'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(0),
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  wrapper: {
    padding: theme.spacing(0),
    flex: 1,
    display: 'flex',
    backgroundColor: 'magenta'
  },
  innerWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-reverse',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'space-around'
    }
  },
  innerForm: {
    order: 2,
    backgroundColor: theme.palette.secondary.light,
    padding: theme.spacing(2),
    height: 'fit-content',
    paddingTop: theme.spacing(0),
    [theme.breakpoints.up('md')]: {
      order: 1,
      padding: theme.spacing(2),
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
      borderRadius: '10px'
    }
  },
  innerHeader: {
    order: 1,
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      order: 2,
    }
  }
}))

function DonatePage(props) {
  const classes = useStyles()
  const { id } = useParams()
  const [ fundraiser, setFundraiser ] = useState(null)
  const [fundraiserOwner, setFundraiserOwner] = useState(null)

  useEffect(() => {
    axios(`http://127.0.0.1:4000/fundraisers/${id}` )
    .then(response => {
      const fundraiser = response.data
      setFundraiser(fundraiser)
      document.title = `Donate | ${fundraiser.name}`
      axios(`http://127.0.0.1:4000/users/${fundraiser.ownerId}`)
        .then(response => {
          const owner = response.data 
          setFundraiserOwner(owner)
        })
        .catch(error => {
          console.log('Failed to get fundraiser owner from db.')
        })
    })
    .catch(error => {
      console.log('Failed to get fundraiser from db.')
    })
  },[])
  
  if (fundraiser && fundraiserOwner) {
    return (
    <Container maxWidth={'xl'} className={classes.root}>
      <ProjectPageHeader />
      <Container maxWidth={'md'} className={classes.wrapper}>
        <Grid item xs={12} className={classes.innerWrapper} >
          <Grid item xs={12} md={7} className={classes.innerForm}>
            <DonateForm projectId={id}  />
          </Grid>
          <Grid item xs={12} md={4} className={classes.innerHeader}>
            <DonateFormHeader fundraiser={fundraiser} fundraiserOwner={fundraiserOwner} />
          </Grid>
        </Grid>
      </Container>
      <DonateFormFooter />
    </Container>
  )} else {
    return (<h1>LOADING...</h1>)
  }
}

export default DonatePage
