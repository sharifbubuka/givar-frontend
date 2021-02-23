import React from 'react'

function WhatsappButton({children, ...props}) {
  return (
    <a {...props} style={{textDecoration: 'none'}} href='/#'>
      {children ? children : 'Share On Whatsapp'}
    </a>
  )
}

export default WhatsappButton
