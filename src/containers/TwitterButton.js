import React from 'react'

function TwitterButton({children, ...props}) {
  return (
    <a {...props} style={{textDecoration: 'none'}} href="https://twitter.com/intent/tweet?screen_name=sharifbubuka&ref_src=twsrc%5Etfw"  data-show-count="false">
      {children ? children: 'Share On Twitter'}
    </a>
  )
}

export default TwitterButton
