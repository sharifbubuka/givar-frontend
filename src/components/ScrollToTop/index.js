import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AiOutlineArrowUp } from 'react-icons/ai'

const useStyles = makeStyles((theme) => ({
  '@global': {
    '@keyframes fadeIn': {
      '0%': { opacity: 0 },
      '25%': { opacity: 0.25 },
      '50%': { opacity: 0.5 },
      '75%': { opacity: 0.75 },
      '100%': { opacity: 1 }
    }
  },
  btn: {
    backgroundColor: theme.palette.secondary.main,
    width: '40px',
    height: '40px',
    borderRadius: '7px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    bottom: theme.spacing(4),
    right: theme.spacing(4),
    animation: 'fadeIn 120ms ease-in-out 100ms both',
    cursor: 'pointer',
    zIndex: 900
  },
  icon: {
    color: 'white'
  }
}))


function ScrollToTop() {
  const [ isVisible, setIsVisible ] = useState(false)
  const classes = useStyles()

  const toggleVisibility = () => {
    if (window.pageYOffset > 300)
      setIsVisible(true)
    else 
      setIsVisible(false)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <>
    {isVisible && 
      <div className={classes.btn} onClick={scrollToTop}>
        <AiOutlineArrowUp className={classes.icon} />
      </div> 
    }
    </>
  )
}

export default ScrollToTop
