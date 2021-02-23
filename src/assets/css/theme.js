import { createMuiTheme } from '@material-ui/core/styles'

const font = "'Inter', sans-serif"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgba(60, 50, 115, 1)'
    },
    secondary: {
      main: 'rgba(87, 62, 222, 1)'
    },
    error: {
      main: 'rgba(220, 46, 39, 1)'
    },
    warning: {
      main: 'rgba(227, 208, 43, 1)'
    },
    info: {
      main: 'rgba(68, 162, 243, 1)'
    },
    success: {
      main: 'rgb(23, 169, 116)'
    },
    tertiary: {
      main: 'pink'
    }
  },
  typography: {
    fontFamily: font
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1367,
      xl: 1920
    }
  }
})

export default theme