import React from 'react'
import "./CSSInComponent.css";

const CSSInComponent = () => {
  return (
    <div>
        <h1> Inherited H1 Style</h1>
        <h1 className='comp-header'> Local H1 Style</h1>
    </div>
  )
}

export default CSSInComponent