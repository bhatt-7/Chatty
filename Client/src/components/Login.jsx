// import React, { useState } from 'react'
// import logo from '../Images/live_chat.png'
// import { Backdrop, Button, CircularProgress, TextField } from '@mui/material'
// import SignUp from './SignUp'
// import {toast} from 'react-toastify'
// import { useNavigate } from "react-router-dom";
// import { Password } from '@mui/icons-material';
// import axios from 'axios'
// function Login() {
//     const [isLogin, setIsLogin] = useState(false);
//     const [data, setData] = useState({ name: "", email: "", Password: "" });
//     const [loading, setLoading] = useState(false);

//     const [logInStatus, setLogInStatus] = React.useState("");
//     const [signInStatus, setSignInStatus] = React.useState("");

//     const navigate = useNavigate();

//     const changeHandler = (e) => {
//         setData({ ...data, [e.target.name]: e.target.value })
//     }

//     const loginHandler = async (e) => {
//         setLoading(true);
//         console.log(data);
//         try {
//             const config = {
//                 headers: {
//                     "Content-type": "application/json",
//                 },
//             };

//             const response = await axios.post(
//                 "http://localhost:5000/user/login/",
//                 data,
//                 config
//             );

//             console.log("login:", response);
//             setLogInStatus({ msg: "Success", key: Math.random() })
//             setLoading(false);
//             localStorage.setItem("userData", JSON.stringify(response));
//             navigate("/app/welcome");
//         } catch (error) {
//             setLogInStatus({
//                 msg: "Invalid username or password",
//                 key: Math.random(),
//             })
//         }
//         setLoading(false);
//     }

//     const signUpHandler = async () => {
//         setLoading(true);
//         try {
//             const config = {
//                 header: {
//                     "Content-type": "application/json",
//                 },
//             };
//             const response = await axios.post(
//                 "http://localhost:5000/user/register/",
//                 data,
//                 config
//             );
//             console.log(response);
//             setSignInStatus({ msg: "Success", key: Math.random() })
//             navigate("/app/welcome")
//             localStorage.setItem("userData", JSON.stringify(response))
//         } catch (error) {
//             console.log(error);
//             if (error.response.status == 405) {
//                 setLogInStatus({
//                     msg: "User with this email ID already exists",
//                     key: Math.random(),
//                 })
//             }
//             if (error.response.status == 406) {
//                 setLogInStatus({
//                     msg: "Username already taken, please take another one",
//                     key: Math.random(),
//                 })
//             }
//             setLoading(false);
//         }
//     }

//     const toggleLoginSignUp = () => {
//         setIsLogin(!isLogin)
//     }
//     return (
//         <>
//             <Backdrop
//                 sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
//                 open={loading}
//             >
//                 <CircularProgress color='secondary' />
//             </Backdrop>
//             <div className='login-container'>
//                 <div className='image-container'>
//                     <img src={logo} alt="Logo" className='welcome-logo' />
//                 </div>
//                 {isLogin ? (
//                     <div className='login-box'>
//                         <p className='login-text'>Login to your account</p>
//                         <TextField
//                             onChange={changeHandler}
//                             id="standard-basic"
//                             label="Enter User Name"
//                             variant="outlined"
//                             color="secondary"
//                             name="name"
//                         />
//                         <TextField
//                             onChange={changeHandler}
//                             id="outlined-password-input"
//                             label="password"
//                             type='password'
//                             autoComplete='current-password'
//                             color='secondary'
//                             name='password'
//                         />
//                         <Button
//                         variant="outlined"
//                         color='secondary'
//                         onClick={loginHandler}
//                         isLoading
//                         >
//                             Login
//                         </Button>
//                         <p className='toggle-text'>
//                             Don't have an account?{' '}
//                             <span onClick={toggleLoginSignUp} className='toggle-link'>Sign Up</span>
//                         </p>
//                         {logInStatus?(
//                             <toast key={logInStatus.key} message={logInStatus.msg}/>
//                         ):null}
//                     </div>
//                 ) : (
//                     <SignUp toggleLoginSignUp={toggleLoginSignUp} />
//                 )}

//             </div>
//         </>
//     )
// }

// export default Login
import React, { useState } from 'react';
import logo from '../Images/live_chat.png';
import { Backdrop, Button, CircularProgress, TextField } from '@mui/material';
import SignUp from './SignUp';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Login() {
    const [isLogin, setIsLogin] = useState(false);
    const [data, setData] = useState({ name: "", email: "", password: "" });
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const loginHandler = async (e) => {
        setLoading(true);
        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };

            const response = await axios.post(
                "http://localhost:5000/user/login/",
                data,
                config
            );

            toast.success("Login Successful!");
            localStorage.setItem("userData", JSON.stringify(response.data));
            navigate("/app/welcome");
        } catch (error) {
            toast.error("Invalid username or password");
        }
        setLoading(false);
    };

    const signUpHandler = async () => {
        setLoading(true);
        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };

            const response = await axios.post(
                "http://localhost:5000/user/register/",
                data,
                config
            );

            toast.success("Sign Up Successful!");
            localStorage.setItem("userData", JSON.stringify(response.data));
            navigate("/app/welcome");
        } catch (error) {
            console.error("Sign Up Error:", error);  // Log the error details
            if (error.response) {
                if (error.response.status === 400) {
                    toast.error("Bad Request: Please check your input.");
                } else if (error.response.status === 405) {
                    toast.error("User with this email ID already exists");
                } else if (error.response.status === 406) {
                    toast.error("Username already taken, please choose another one");
                } else {
                    toast.error("An error occurred. Please try again.");
                }
            } else {
                toast.error("An error occurred. Please try again.");
            }
        }
        setLoading(false);
    };

    const toggleLoginSignUp = () => {
        setIsLogin(!isLogin);
    };

    return (
        <>
            <Backdrop
                sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
            >
                <CircularProgress color='secondary' />
            </Backdrop>
            <div className='login-container'>
                <div className='image-container'>
                    <img src={logo} alt="Logo" className='welcome-logo' />
                </div>
                {isLogin ? (
                    <div className='login-box'>
                        <p className='login-text'>Login to your account</p>
                        <TextField
                            onChange={changeHandler}
                            id="standard-basic"
                            label="Enter User Name"
                            variant="outlined"
                            color="secondary"
                            name="name"
                        />
                        <TextField
                            onChange={changeHandler}
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
                            onClick={loginHandler}
                        >
                            Login
                        </Button>
                        <p className='toggle-text'>
                            Don't have an account?{' '}
                            <span onClick={toggleLoginSignUp} className='toggle-link'>Sign Up</span>
                        </p>
                    </div>
                ) : (
                    <SignUp
                        toggleLoginSignUp={toggleLoginSignUp}
                        signUpHandler={signUpHandler}
                        data={data}
                        changeHandler={changeHandler}
                    />
                )}
            </div>
            <ToastContainer />
        </>
    );
}

export default Login;
