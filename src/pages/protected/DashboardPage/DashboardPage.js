import React, {useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route, useRouteMatch} from 'react-router-dom'
import Authenticate from '../Authenticate'
import DashBoardHeader from './DashBoardHeader'
import DashBoardFooter from './DashBoardFooter'
import CreateFundraiser from '../CreateProjectPage/CreateProjectPage'
import {makeStyles} from '@material-ui/core/styles'
import {connect} from 'react-redux'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  }
}))

function DashboardPage({user}) {
  const classes = useStyles()
  const {path,url} = useRouteMatch()

  useEffect(() => {
    return
  }, [user.authenticated])

  return (
    <div className={classes.root}>
      <DashBoardHeader />
      <DashBoardFooter />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(DashboardPage)
