import React from 'react'

function FacebookButton({children, ...props}) {
  return (
    <a style={{textDecoration: 'none'}} {...props} href='/#'>
      {children ? children : 'Share On Facebook'}
    </a>
  )
}

export default FacebookButton
