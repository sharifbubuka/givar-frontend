import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import FormField from '../../../components/FormField'
import validate from '../../../utils/validation'
import TogglePasswordVisibility from './TogglePasswordVisibility'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  formSection: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
  },
  toggleVisibility:  {
    display: 'flex',
    justifyContent: 'center'
  }
}))

function ResetPasswordForm() {
  const classes = useStyles()
  const [passwordVisibility, setPasswordVisibility ]  = useState(false)

  const togglePasswordVisibility = () => {
    if (formik.values.password1 !== '' && formik.values.password2 !== '')
      setPasswordVisibility(!passwordVisibility)
  }

  const validationSchema = yup.object({
    password1: validate.validatePassword,
    password2: validate.validatePasswordEquality
  })

  const initialalues = {
    password1: '',
    password2: ''
  }

  const handleFormSubmit = (values) => {
    if (formik.values.password1 !== '' && formik.values.password2 !== '')
    console.log(values)
  }

  const formik = useFormik({
    initialValues: initialalues,
    validationSchema: validationSchema,
    onSubmit: handleFormSubmit
  })

  return (
    <section className={classes.formSection}>
      <h2 className={classes.formHeader}>Reset Password</h2>
      <form onSubmit={formik.handleSubmit} className={classes.form}>
        <FormField
          type='password'
          name='password1'
          label='Password'
          autoFocus
          value={formik.values.password1}
          onChange={formik.handleChange}
          error={formik.touched.password1 && Boolean(formik.errors.password1)}
          helperText={formik.touched.password1 && formik.errors.password1}
        />

        <FormField
          type={passwordVisibility ? 'text' : 'password'}
          name='password2'
          label='Confirm Password'
          value={formik.values.password2}
          onChange={formik.handleChange}
          error={formik.touched.password2 && Boolean(formik.errors.password2)}
          helperText={formik.touched.password2 && formik.errors.password2}
        />

        {/* <button onClick={togglePasswordVisibility}>Toggle visibility</button> */}
        <div className={classes.toggleVisibility}>
          <TogglePasswordVisibility 
            passwordVisible={passwordVisibility} 
            onClick={togglePasswordVisibility} 
            errorState={formik.touched.password2 && Boolean(formik.errors.password2)}
          />
        </div>
        <FormField
          type='submit'
          name='submit'
          value='Reset Password'
        />
      </form>
    </section>
  )
}

export default ResetPasswordForm
