import React from 'react'
import Ticker from 'react-ticker'

function MoveText(props) {
  const { speed, direction, mode, height, offset, move, message, ...rest } = props
  return (
    <Ticker speed={speed} direction={direction} mode={mode} offset={offset} move={move} >
        {() => (
            <>
                {/* <h4 className='tickerMessage'>{message}</h4> */}
                {props.children}
            </>
        )}
    </Ticker>
  )
}

export default MoveText
