import React from 'react'

const StateLift = ({func}) => {
  return (
    <div>
        <button onClick={()=>func('red')}>Change Color</button>
    </div>
  )
}

export default StateLift