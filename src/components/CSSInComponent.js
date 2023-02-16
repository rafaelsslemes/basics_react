import React from 'react'
import "./CSSInComponent.css";

const CSSInComponent = () => {

const n = 12;

  return (
    <div>
        <h1> Inherited H1 Style</h1>
        <h1 className='comp-header'> Local H1 Style</h1>
        <p style={{color:'pink', padding: '25px,', borderTop:'10px solid red',}}>
            CSS Inline Here
        </p>
        <p style={n < 10 ? {color:'purple'} : {color:'blue'}}>
        Dynamic CSS Inline Here
        </p>
    </div>
  )
  
}

export default CSSInComponent