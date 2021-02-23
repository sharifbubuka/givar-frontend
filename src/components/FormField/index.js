import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'

const useStyles = makeStyles(theme => ({
  submitBtn: {
    backgroundColor: theme.palette.success.main,
    border: `1px solid ${theme.palette.success.main}`,
    fontFamily: theme.typography.fontFamily,
    boxShadow: 'none',
    borderRadius: '4px',
    padding: '7px 15px',
    color: 'white',
    cursor: 'pointer',
    margin: theme.spacing(1),
    transition: 'all 100ms ease 0s',
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
      border: `1px solid ${theme.palette.secondary.dark}`
    }
  },
  inputField: {
    margin: theme.spacing(1),
    color: theme.palette.primary.light
  },
  checkBoxLabel: {
    fontSize: '0.8rem',
    lineHeight: '0.5rem'
  }
}))

function FormField(props) {
  const classes = useStyles()
  const { type, name, label, value, options, ...others } = props

  switch (type) {
    case 'text': return (
      <TextField 
        className={classes.inputField}
        id={name} 
        name={name}
        label={label}
        type={type}
        value={value}
        variant='outlined'
        size='small'
        {...others}
      />
    )  

    case 'email': return (
      <TextField
        className={classes.inputField}
        id={name}
        name={name}
        label={label}
        type={type}
        value={value}
        variant='outlined'
        size='small'
        {...others}
      />
    )

    case 'password': return (
      <TextField
        className={classes.inputField}
        id={name}
        name={name}
        label={label}
        type={type}
        value={value}
        variant='outlined'
        size='small'
        {...others}
      />
    )
    
    case 'submit': return (
      <button 
        className={classes.submitBtn}
        type={type}
        id={name}
        name={name}
        {...others}
      >{value}
      </button>
    )

    case 'checkbox': return (
      <Checkbox
        name={name}
        checked={value}
        color='secondary'
        size="small"
        disableRipple
        disableFocusRipple
        disableTouchRipple
        inputProps={{ 'aria-label': 'checkbox with small size' }}
        {...others}
      />
    )

    case 'fileinput': return (
      <input 
        type='file' 
        name={name}
        {...others}  
      />
    )

    case 'multiline': return (
      <TextField
          name={name}
          label={label}
          multiline
          rows={5}
          rowsMax={500}
          variant="outlined"
          {...others}
        />
    )

    case 'autocomplete': return (
      <Autocomplete
      size='small'
      options={options}
      getOptionLabel={(option) => option}
      renderInput={(params) => <TextField 
                    {...params} 
                    label={label} 
                    name={name} 
                    {...others}
                    fullWidth 
                    variant="outlined" 
                  />}
    />
    )

    default: return(
      <></>
    )
  }
}

export default FormField
