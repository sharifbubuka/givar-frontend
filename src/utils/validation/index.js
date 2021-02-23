import * as yup from 'yup'
import { string } from 'yup/lib/locale'

const validateEmail = yup
  .string('Enter your email')
  .email('Enter valid email')
  .required('Email is required')

const validateFunderEmail = yup
  .string()
  .email('Enter valid email')

const validatePassword = yup
  .string('Enter password')
  .min(8, '8 or more characters required')
  .required('Password is required')

const validatePasswordEquality = yup
  .string()
  .required('Confirmation of password required')
  .oneOf([yup.ref('password1'), null], 'Passwords must match')

const validatePhoneNumber = yup
  .string('Enter your phone number')
  .required('Phone number is required')

const validateName = (label) => {
  return yup
    .string()
    .required(`${label} is required`)
}

const validateProjectName = yup
    .string()
    .required('Project Name is required')

const validateProjectCategory = yup
  .string()
  .required('Project category is required')

const validateCountry = yup
  .string()
  .required('Country is required')
  .oneOf(['Uganda', 'uganda'], 'We only operate in Uganda currently.')

const validateTown = yup
  .string()
  .required('Town is required')

const validate = { 
  validateEmail, 
  validateFunderEmail,
  validatePassword, 
  validatePasswordEquality, 
  validatePhoneNumber,
  validateName,
  validateProjectName,
  validateProjectCategory,
  validateCountry,
  validateTown,
}

export default validate