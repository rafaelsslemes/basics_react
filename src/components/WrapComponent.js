import React from 'react'

const WrapComponent = ({children}) => {
  return (
    <div>
        <h1>
            Wrap Header
        </h1>
        {/* All content inside tags */}
            {children}
        <h1>
            Wrap Bottom
        </h1>

    </div>
  )
}

export default WrapComponent