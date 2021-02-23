import React, { useState, useCallback } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import FormField from '../../../components/FormField'
import { makeStyles } from '@material-ui/core/styles'
import FormSubmitButton from './FormSubmitButton'
import validate from '../../../utils/validation'
import { Link } from 'react-router-dom'
import format from '../../../utils/format/currency'
import { usePosition } from '../../../hooks/usePosition'
import axios from 'axios'

const useStyles = makeStyles(theme => ({
  form: {
    order: 2,
    backgroundColor: 'pink',
    padding: theme.spacing(1),
    borderRadius: '10px',
    color: theme.palette.primary.main,
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(0),
      borderRadius: '10px',
    }
  },
  donationField: {
    // backgroundColor: 'green',
    paddingTop: theme.spacing(1)
  },
  donationLabel: {
    fontSize: '1.5rem'
  },
  donationFieldInput: {
    height: '70px',
    width: '100%',
    display: 'flex',
    position: 'relative',
    marginTop: theme.spacing(1)
  },
  donationInput: {
    width: '100%',
    height: '100%',
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(13),
    fontSize: '3.5rem',
    fontWeight: 300,
    borderRadius: '10px',
    color: theme.palette.primary.dark,
    border: 'none',
    backgroundColor: theme.palette.secondary.light,
    '&:focus': {
      outline: 'none',
      border: 'none'
    }
  },
  donationCurrencyBox: {
    position: 'absolute',
    left: theme.spacing(2),
    top: '50%',
    fontSize: '2.0rem',
    fontWeight: 900,
    color: theme.palette.primary.dark,
  },
  tipFiled: {
    marginTop: theme.spacing(6),
    borderTop: '1px solid rgba(87, 62, 222, 0.3)',
    paddingTop: theme.spacing(0)
  },
  tipFieldHeader: {
    fontSize: '0.9rem'
  },
  tipFieldInputBox: {
    display: 'flex',
    alignItems: 'stretch',
    fontSize: '0.85rem'
  },
  tipFieldInputBoxLeft: {
    display: 'flex',
    alignItems: 'center',
    maxHeight: '50px',
    [theme.breakpoints.up('md')]: {
      flex: 1,
      justifyContent: 'flex-end'
    }
  },
  tipFieldInputBoxRight: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    marginLeft: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      flex: 'none'
    }
  },
  tipFieldInput: {
    display: 'flex',
    position: 'relative',
    height: '50px'
  },
  tipInput: {
    width: '100%',
    maxWidth: '220px',
    height: '100%',
    padding: theme.spacing(0.5),
    paddingLeft: theme.spacing(6.5),
    fontSize: '2.5rem',
    fontWeight: 300,
    borderRadius: '10px',
    color: theme.palette.primary.dark,
    border: 'none',
    backgroundColor: theme.palette.secondary.light,
    '&:focus': {
      outline: 'none',
      border: 'none'
    }
  },
  tipCurrencyBox: {
    position: 'absolute',
    top: '45%',
    left: theme.spacing(1),
    fontSize: '1rem',
    fontWeight: 900,
    color: theme.palette.primary.dark
  },
  totalDonation: {
    marginTop: theme.spacing(1.5),
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    maxWidth: '250px'
  },
  totalCurrencyBox: {
    fontWeight: 900,
    marginLeft: theme.spacing(0.5),
    marginRight: theme.spacing(0.5)
  },
  mainFormFields: {
    borderTop: '1px solid rgba(87, 62, 222, 0.3)',
    marginTop: theme.spacing(2),
    paddingTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column'
  },
  namesWrapper: {
    padding: theme.spacing(0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      justifyContent: 'stretch'
    }
  },
  locationWrapper: {
    padding: theme.spacing(0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      justifyContent: 'stretch'
    }
  },
  profileVisibilityBox: {
    display: 'flex',
    alignItems: 'center'
  },
  profileVisibilityLabel: {
    lineHeight: '0.8rem', 
    fontSize: '0.8rem'
  },
  submitButtonWrapper: {
    width: '100%',
    height: 'fit-content',
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  formFooter: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  footerDisclaimer: {
    width: '70%',
    textAlign: 'center',
    fontSize: '0.7rem'
  },
  backToProjectLink: {
    fontSize: '0.8rem',
    marginTop: theme.spacing(0.5),
    textDecoration: 'none',
    color: theme.palette.primary.main,
    '&:hover': {
      fontWeight: 900,
      color: theme.palette.primary.dark
    }
  }
}))

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  telephone: '',
  donation: 0,
  tip: 0,
  total: 0,
  country: 'Uganda',
  town: '',
  profileVisibility: true
}

const validationSchema = yup.object({
  firstName: validate.validateName('First Name'),
  lastName: validate.validateName('Last Name'),
  email: validate.validateFunderEmail,
  telephone: validate.validatePhoneNumber,
  country: validate.validateCountry,
  town: validate.validateTown
})

function DonateForm(props) {
  const classes = useStyles()
  const [ formState, setFormState ] = useState(null)
  const {latitude, longitude, positionError } = usePosition()
  console.log(latitude);
  console.log(longitude);

  const getTotalDonation = () => {
    return format.formatNumberToString(format.formatStringToNumber(formik.values.donation) + format.formatStringToNumber(formik.values.tip))
  }

  const handleFormSubmit = (values, {resetForm}) => {
    const { donation, tip, firstName, lastName, town } = values

    const capitaliseFirstCharacter = (string) => {
      let firstChar = [...String(string)][0].toUpperCase()
      return [firstChar, ...string.slice(1)].join('')
    }

    const requestDonorToPay = async body => {
      const { telephone, total, projectId } = body
      return await axios({
        method: 'post',
        url: 'http://127.0.0.1:4000/funders/pay',
        data: { telephone, totalToPay: total, projectName: projectId }
      })
    }

    const saveDonorToDB = async body => {
      return await axios({
        
      })
    }

    const submitForm = async body => {
      setFormState('submitting')
      const { data } = await requestDonorToPay(body)
      if (data.success) {
        const { data } = await saveDonorToDB(body)
      }

      // .then(response => {
      //   console.log(response.data);
      // })
      // .catch(error => {
      //   console.log(error);
      //   setFormState(null) // occurs on request timeout
      // })
    }

    const cleanValues = {
      ...values,
      firstName: capitaliseFirstCharacter(firstName),
      lastName: capitaliseFirstCharacter(lastName),
      town: capitaliseFirstCharacter(town),
      donation: format.formatStringToNumber(donation),
      projectId: props.projectId,
      tip: format.formatStringToNumber(tip),
      total: format.formatStringToNumber(getTotalDonation())
    }

    if (latitude && longitude) {
      cleanValues.position = { 
        success: true,
        longitude: longitude,
        latitude: latitude
       }
       submitForm(cleanValues)
      console.log(cleanValues)
      formik.resetForm()
      return
    }

    cleanValues.position = {
      success: false,
      message: positionError
    }
    submitForm(cleanValues)
    console.log({cleanValues,positionError})
    formik.resetForm()
  }

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: handleFormSubmit
  })

  return (
    <form onSubmit={formik.handleSubmit} className={classes.form} onReset={formik.handleReset}>
      <div className={classes.donationField}>
        <label htmlFor='donation' className={classes.donationLabel}>Enter your donation</label>
        <div className={classes.donationFieldInput}>
          <input 
            type='text'
            name='donation'
            id='donation' 
            value={format.formatNumberToString(format.formatStringToNumber(formik.values.donation))}
            onChange={formik.handleChange}
            className={classes.donationInput}
          />
          <span className={classes.donationCurrencyBox}>UGX.</span>
        </div>
      </div>

      <div className={classes.tipFiled}>
        <p className={classes.tipFieldHeader}>
          Givar has a 0% platform fee for organizers. Leaving a tip to us will
          enable us keep offering this service the best way we can.
        </p>
        <div className={classes.tipFieldInputBox}>
          <label htmlFor='tip' className={classes.tipFieldInputBoxLeft}>
            Thank you for your tip of: 
          </label>
          <div className={classes.tipFieldInputBoxRight}>
            <div className={classes.tipFieldInput}>
              <input 
                type='text'
                name='tip'
                id='tip' 
                className={classes.tipInput}
                value={format.formatNumberToString(format.formatStringToNumber(formik.values.tip))}
                onChange={formik.handleChange}
              />
              <span className={classes.tipCurrencyBox}>UGX.</span>
            </div>
            <span className={classes.totalDonation}>
              Total charge:<span className={classes.totalCurrencyBox}>UGX.</span> 
              {getTotalDonation()}
            </span>
          </div>
        </div>
      </div>

      <div className={classes.mainFormFields}>
        <div className={classes.namesWrapper}>
          <FormField
            type='text'
            name='firstName'
            label='First Name'
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
        </div>

        <FormField
          type='email'
          name='email'
          label='Email'
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />

        <div className={classes.locationWrapper}>
          <FormField
            type='text'
            name='country'
            label='Country'
            value={formik.values.country}
            onChange={formik.handleChange}
            error={formik.touched.country && Boolean(formik.errors.country)}
            helperText={formik.touched.country && formik.errors.country}
          />

          <FormField
            type='text'
            name='town'
            label='Town'
            value={formik.values.town}
            onChange={formik.handleChange}
            error={formik.touched.town && Boolean(formik.errors.town)}
            helperText={formik.touched.town && formik.errors.town}
          />
        </div>

        <span className={classes.profileVisibilityBox}>
          <FormField
            type='checkbox'
            name='profileVisibility'
            value={formik.values.profileVisibility}
            onChange={formik.handleChange}
            label='Make my donation anonymous to organizer and others'
            style={{fontSize: '0.5rem'}}
          />
          <span className={classes.profileVisibilityLabel}>Leave my donation visible to organizer and others</span>
        </span>

        <FormField
          type='text'
          name='telephone'
          label='telephone'
          value={formik.values.telephone}
          onChange={formik.handleChange}
          error={formik.touched.telephone && Boolean(formik.errors.telephone)}
          helperText={formik.touched.telephone && formik.errors.telephone}
        />
      </div>

      <span className={classes.submitButtonWrapper}>
        <FormSubmitButton formState={formState} handleFormSubmit={handleFormSubmit} />
      </span>

      <footer className={classes.formFooter}>
        <small className={classes.footerDisclaimer}>
          By continuing, you agree to the Givar terms and acknowledge receipt
          of our privacy policy.
        </small>
        <Link to={`/project/${props.id}`} className={classes.backToProjectLink}>To Project Profile</Link>
      </footer>
    </form>
  )
}

export default React.memo(DonateForm)
