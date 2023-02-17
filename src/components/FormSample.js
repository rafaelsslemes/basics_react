import React, { useState } from 'react'
import './FormSample.css';

const FormSample = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const handleChangeName = (event) => {
        setName(event.target.value);
    }

    console.log(name);
    console.log(email)

  return (
    <div>
        <form>
            <label htmlFor='name'>Name:</label>
            <input type='text' name='name' placeholder='Type your name' 
            onChange={handleChangeName}/>

            <label>
                <span>Email:</span>
                <input type='text' name='email' placeholder='Type your email'
                onChange={(event) => setEmail(event.target.value)}/>
            </label>
            
            <input type='submit' value='Send'/>
        </form>

    </div>
  )
}

export default FormSample