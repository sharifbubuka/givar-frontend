import React, {useState, useEffect} from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import store from 'store'
import FormField from '../../../components/FormField'
import { makeStyles } from '@material-ui/core/styles'
import validate from '../../../utils/validation'
import { Link, useHistory } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'

import {connect} from 'react-redux'
import { fetchUser } from '../../../redux/user/userActions'

const useStyles = makeStyles(theme => ({
  formSection: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.primary.main
  },
  formHeader: {
    fontWeight: '600'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '150px',
    justifyContent: 'space-around'
  },
  bannerInfo: {
    fontSize: '0.85rem',
    textAlign: 'center'
  },
  formActionLink: {
    oolor: theme.palette.primary.main,
    textDecoration: 'none',
    fontWeight: 600,
    '&:active': {
      color: theme.palette.primary.main
    },
    '&:focus': {
      color: theme.palette.primary.main
    },
    '&:visited': {
      color: theme.palette.primary.main
    }
  },
  backBox: {
    display: 'flex',
    alignItems: 'center'
  }
}))

const validationSchema = yup.object({
  email: validate.validateEmail,
  password: validate.validatePassword
})

function LoginForm({ userKnowsPassword, loginUser, user }) {
  const classes = useStyles()
  const [knowsPassword, setKnowsPassword] = useState(userKnowsPassword)
  const history = useHistory()
  let initialValues = {}

  useEffect(() => {
    user.authenticated && history.push('/dashboard')
  }, [user])
  
  knowsPassword ? initialValues = {email: '', password: '' } : initialValues = { email: '' }
  
  const handleFormSubmit = (values, {resetForm}) => {
    if (values.password) {
      loginUser({email: values.email, password:values.password})
      if (user.authenticated === true) {
        resetForm()
        history.push('/dashboard')
      }
      return
    }

    if (!values.password) {

    }
  }

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: handleFormSubmit
  })

  const toggleKnowsPassword = (e) => {
    setKnowsPassword(!knowsPassword)
  }  

  return (
    <section className={classes.formSection}>
      {knowsPassword ? <h2 className={classes.formHeader}>Sign in</h2> : <h2 className={classes.formHeader}>Forgot Password</h2>}
      <form onSubmit={formik.handleSubmit} className={classes.form}>
        <FormField
          type='text'
          name='email'
          label='Email'
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        {knowsPassword ? (
          <FormField
            type='password'
            name='password'
            label='Password'
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        ): (
          <p className={classes.bannerInfo}>Please provide your email address</p>
        )
        }

        <FormField
          type='submit'
          name='submit'
          value={knowsPassword ? 'Login' : 'Request new Password'}
        />
      </form>

      <Link 
        className={classes.formActionLink} 
        to='/login' onClick={toggleKnowsPassword}>
          {knowsPassword ? 
            'Forgot your password?': 
            (
              <span className={classes.backBox}>
                <BiArrowBack size={17} style={{marginRight: '5px'}} />Go back
              </span>
            )}</Link>
    </section>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser: ({email, password}) => dispatch(fetchUser({email:email, password:password}))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
