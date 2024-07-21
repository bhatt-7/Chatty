// import React from 'react'
// import { Button, TextField } from '@mui/material'
// import './myStyles.css'
// import logo from '../Images/live_chat.png'
// function SignUp({toggleLoginSignUp}) {
//     return (
//         <div className='signup-box  '>

//                 <p className='signup-text'>Create a new account</p>
//                 <TextField 
//                     id="standard-basic" 
//                     label="Enter User Name" 
//                     variant="outlined"

//                 />
//                 <TextField 
//                     id="standard-basic" 
//                     label="Enter Email" 
//                     variant="outlined"


//                 />
//                 <TextField 
//                     id="outlined-password-input" 
//                     label="Password"
//                     type='password'
//                     autoComplete='current-password'
//                 />
//                 {/* <TextField 
//                     id="outlined-password-input" 
//                     label="Password"
//                     type='password'
//                     autoComplete='current-password'
//                 /> */}

//                 <Button variant="outlined" >
//                     Sign Up
//                 </Button>
//                 <p className='toggle-text'>
//                     Already have an account?{' '}
//                     <span onClick={toggleLoginSignUp} className='toggle-link'>Login</span>
//                 </p>

//         </div>
//     )
// }

// export default SignUp
import React from 'react';
import { Button, TextField } from '@mui/material';

function SignUp({ toggleLoginSignUp, signUpHandler, data, changeHandler }) {
    return (
        <div className='signup-box'>
            <p className='signup-text'>Create a new account</p>
            <TextField
                onChange={changeHandler}
                value={data.name}
                id="standard-basic"
                label="Enter User Name"
                variant="outlined"
                color="secondary"
                name="name"
            />
            <TextField
                onChange={changeHandler}
                value={data.email}
                id="outlined-email-input"
                label="Email"
                type='email'
                autoComplete='current-email'
                color='secondary'
                name='email'
            />
            <TextField
                onChange={changeHandler}
                value={data.password}
                id="outlined-password-input"
                label="Password"
                type='password'
                autoComplete='current-password'
                color='secondary'
                name='password'
            />
            <Button
                variant="outlined"
                color='secondary'
                onClick={signUpHandler}
            >
                Sign Up
            </Button>
            <p className='toggle-text'>
                Already have an account?{' '}
                <span onClick={toggleLoginSignUp} className='toggle-link'>Login</span>
            </p>
        </div>
    );
}

export default SignUp;
