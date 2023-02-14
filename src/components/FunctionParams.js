import React from 'react'

const FunctionParams = ({func}) => {
  return (
    <div>
        <button onClick={()=>func('Message of Child')}>Execute Function</button>
    </div>
  )
}

export default FunctionParams