import React, {useEffect, useState} from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import FormField from '../../../components/FormField'
import validate from '../../../utils/validation'
import TogglePasswordVisibility from '../../protected/ResetPasswordPage/TogglePasswordVisibility'
import  { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { registerUser } from '../../../redux/register/registerActions'
import { useHistory } from 'react-router-dom'

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
    minHeight: '200px',
    justifyContent: 'space-around'
  }
}))

const validationSchema = yup.object({
  firstName: validate.validateName('First Name'),
  lastName: validate.validateName('Last Name'),
  email: validate.validateEmail,
  telephone: validate.validatePhoneNumber,
  password1: validate.validatePassword,
  password2: validate.validatePasswordEquality
})

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  telephone: '',
  password1: '', 
  password2: ''
}

// const registerUser = async (user) => {
//   const response = await axios.post('http://127.0.0.1:4000/users/', user)
//   console.log(response);
// }

function RegisterForm({registerUser, registrationState}) {
  const classes = useStyles()
  const history = useHistory()
  const [regUserId, setRegUserId] = useState(null)


  const handleFormSubmit = (values, { resetForm }) => {
    const user = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      contact: {telephone: values.telephone},
      password: values.password1
    }
    registerUser(user)
    if (registrationState.registrationSuccess)
      resetForm()
    history.push({pathname: '/login'})
    
    // let response = () => {
    //   return new Promise(function(resolve, reject) {
    //     axios.post('http://127.0.0.1:4000/users', user)
    //     .then(response => {
    //       resolve(response)
    //     })
    //   })
    // }
    // let result = await response()
    // console.log(result);
    // if (result.data.status === 201) {
    //   resetForm()
    // }
  }

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: handleFormSubmit
  })

  return (
    <section className={classes.formSection}>
      <h2 className={classes.formHeader}>Register</h2>
      <form onSubmit={formik.handleSubmit} className={classes.form}>
        <FormField
          type='text'
          name='firstName'
          label='First Name'
          autoFocus
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />

        <FormField
          type='text'
          name='lastName'
          label='Last Name'
          value={formik.values.lastName}
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />

        <FormField
          type='text'
          name='email'
          label='Email'
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <FormField
          type='text'
          name='telephone'
          label='Phone Number'
          value={formik.values.telephone}
          onChange={formik.handleChange}
          error={formik.touched.telephone && Boolean(formik.errors.telephone)}
          helperText={formik.touched.telephone && formik.errors.telephone}
        />

        <FormField
          type='password'
          name='password1'
          label='Password'
          value={formik.values.password1}
          onChange={formik.handleChange}
          error={formik.touched.password1 && Boolean(formik.errors.password1)}
          helperText={formik.touched.password1 && formik.errors.password1}
        />

        <FormField
          type='password'
          name='password2'
          label='Confirm Password'
          value={formik.values.password2}
          onChange={formik.handleChange}
          error={formik.touched.password2 && Boolean(formik.errors.password2)}
          helperText={formik.touched.password2 && formik.errors.password2}
        />

        <FormField
          type='submit'
          name='submit'
          value='Create Account'
        />
      </form>
    </section>
  )
}

const mapStateToProps = state => {
  return {
    registrationState: state.register
  }
}

const mapDispatchToProps = dispatch => {
  return {
    registerUser: user => dispatch(registerUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm)
