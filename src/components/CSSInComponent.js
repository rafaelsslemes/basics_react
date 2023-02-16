import React from 'react'
import './CSSInComponent.css';
import styles from './CSSInComponent.module.css';

const CSSInComponent = () => {

const n = 12;
const name = 'Peter';
const alert = false;

  return (
    <div>
        <h1> Inherited H1 Style</h1>
        <h1 className='comp-header'> Local H1 Style</h1>
        <p style={{color:'pink', padding: '25px', borderTop:'10px solid red',}}>
            CSS Inline Here
        </p>
        <p style={n < 10 ? {color:'purple'} : {color:'blue'}}>
        Dynamic CSS Inline Here
        </p>
        <p style={name === 'John' ? {color:'purple', padding: '10px'} : null}>
        Dynamic CSS Inline Here - Null
        </p>

        <p className={alert ? 'red-title' : 'yellow-title'}>
        Dynamic CSS Class Here
        </p>

        <p className={styles.scoped_css}>
        Scoped Module CSS Class Here
        </p>

        <p className={styles['scoped_css']}>
        Scoped Module CSS Class Here Too
        </p>
    </div>
  )
  
}

export default CSSInComponent