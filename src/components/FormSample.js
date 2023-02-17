import React, { useState } from 'react'
import './FormSample.css';

const FormSample = ({user}) => {

    // Set initial value if user were received
    const [name, setName] = useState(user ? user.name : '');
    const [email, setEmail] = useState(user ? user.email : '');
    const [info, setInfo] = useState(user ? user.info : '');

    const handleChangeName = (event) => {
        setName(event.target.value);
    }

    const handleSubmit = (event) => {
        // Dismiss page redirection
        event.preventDefault();
        
        console.log('Send data');
        console.log(name);
        console.log(email);
        console.log(info);

        // Clean inputs
        setName('');
        setEmail('');
        setInfo('');
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name:</label>
            <input type='text' name='name' placeholder='Type your name' 
                value={name}
                onChange={handleChangeName}/>

            <label>
                <span>Email:</span>
                <input type='text' name='email' placeholder='Type your email'
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}/>
            </label>

            <label>
                <span>Personal Information:</span>
                <textarea name='info' placeholder='Tell us about you'
                    value={info}
                    onChange={(event) => setInfo(event.target.value)}/>
            </label>
            
            <input type='submit' value='Send'/>
        </form>

    </div>
  )
}

export default FormSample