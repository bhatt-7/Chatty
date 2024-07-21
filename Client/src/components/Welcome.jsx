import React, { useEffect } from 'react';
import logo from '../Images/live_chat.png';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function Welcome() {
    const lightTheme = useSelector((state) => state.themeKey);
    const navigate = useNavigate();
    const userData = JSON.parse(localStorage.getItem("userData"));

    useEffect(() => {
        if (!userData) {
            console.log("user not authenticated");
            navigate("/");
        }
    }, [userData, navigate]);

    if (!userData) {
        return null; // or a loading spinner, or some other fallback UI
    }

    const userName = userData?.name;

    return (
        <div className={`welcome-container ${lightTheme ? '' : 'dark'}`}>
            <motion.img
                src={logo}
                alt="logo"
                className='welcome-logo'
                drag
                whileTap={{ scale: 1.05, rotate: 360 }}
            />
            <b>Hi, {userName}</b>
            <p>View and text directly to people present in the chat Rooms.</p>
        </div>
    );
}

export default Welcome;
