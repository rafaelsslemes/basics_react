import React from 'react'

const WrapComponent = ({children, title}) => {
  return (
    <div>
        <h1>
            Wrap Header of <i>{title}</i>
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