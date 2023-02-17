import React from 'react'
import './FormSample.css';

const FormSample = () => {
  return (
    <div>
        <form>
            <label htmlFor='name'>Name:</label>
            <input type='text' name='name' placeholder='Type your name'/>

            <label>
                <span>Email:</span>
                <input type='text' name='email' placeholder='Type your email'/>
            </label>
            
            <input type='submit' value='Send'/>
        </form>

    </div>
  )
}

export default FormSample