import React from 'react'
import "./CSSInComponent.css";

const CSSInComponent = () => {
  return (
    <div>
        <h1> Inherited H1 Style</h1>
        <h1 className='comp-header'> Local H1 Style</h1>
        <p style={{color:'pink', padding: '25px,', borderTop:'10px solid red',}}>CSS Inline Here</p>
    </div>
  )
  
}

export default CSSInComponent