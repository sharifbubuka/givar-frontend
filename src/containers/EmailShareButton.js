import React from 'react'

function EmailShareButton({children, ...props}) {
  return (
    <a {...props} style={{textDecoration: 'none'}} href='/#'>
      {children ? children : 'Share On Email'}
    </a>
  )
}

export default EmailShareButton
