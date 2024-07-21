import React, { useState } from 'react'
import './myStyles.css'
import SearchIcon from '@mui/icons-material/Search'
import { IconButton } from '@mui/material'
import logo from '../Images/live_chat.png'
import { useSelector } from 'react-redux'
import { AnimatePresence, motion } from 'framer-motion'
function Users() {
    const lightTheme = useSelector((state) => state.themeKey)
    const [refresh,setRefresh] = useState(true);
    const [users,setUsers] = useState([]);
    const 
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                    ease: "anticipate",
                    duration: "0.3",
                }}
                className='list-container'>
                <div className={`ug-header ${lightTheme ? '' : 'dark'}`}>
                    <img src={logo} alt="logo" style={{ height: "3rem", width: "3rem" }} />
                    <p className={`ug-title ${lightTheme ? '' : 'dark'}`}>Online Users</p>
                </div>
                <div className={`sb-search ${lightTheme ? '' : 'dark'}`}>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <input placeholder='Search' className={`search-box ${lightTheme ? '' : 'dark'}`} />
                </div>
                <div className="ug-list">
                    <motion.div whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: .98 }}
                        className={`list-tem ${lightTheme ? '' : 'dark'}`}>
                        <p className={`con-icon ${lightTheme ? '' : 'dark'}`}>T</p>
                        <p className={`con-title ${lightTheme ? '' : 'dark'}`}>Test Group</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: .98 }}
                        className={`list-tem ${lightTheme ? '' : 'dark'}`}>
                        <p className={`con-icon ${lightTheme ? '' : 'dark'}`}>T</p>
                        <p className={`con-title ${lightTheme ? '' : 'dark'}`}>Test Group</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: .98 }}
                        className={`list-tem ${lightTheme ? '' : 'dark'}`}>
                        <p className={`con-icon ${lightTheme ? '' : 'dark'}`}>T</p>
                        <p className={`con-title ${lightTheme ? '' : 'dark'}`}>Test Group</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: .98 }}
                        className={`list-tem ${lightTheme ? '' : 'dark'}`}>
                        <p className={`con-icon ${lightTheme ? '' : 'dark'}`}>T</p>
                        <p className={`con-title ${lightTheme ? '' : 'dark'}`}>Test Group</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: .98 }}
                        className={`list-tem ${lightTheme ? '' : 'dark'}`}>
                        <p className={`con-icon ${lightTheme ? '' : 'dark'}`}>T</p>
                        <p className={`con-title ${lightTheme ? '' : 'dark'}`}>Test Group</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: .98 }}
                        className={`list-tem ${lightTheme ? '' : 'dark'}`}>
                        <p className={`con-icon ${lightTheme ? '' : 'dark'}`}>T</p>
                        <p className={`con-title ${lightTheme ? '' : 'dark'}`}>Test Group</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: .98 }}
                        className={`list-tem ${lightTheme ? '' : 'dark'}`}>
                        <p className={`con-icon ${lightTheme ? '' : 'dark'}`}>T</p>
                        <p className={`con-title ${lightTheme ? '' : 'dark'}`}>Test Group</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: .98 }}
                        className={`list-tem ${lightTheme ? '' : 'dark'}`}>
                        <p className={`con-icon ${lightTheme ? '' : 'dark'}`}>T</p>
                        <p className={`con-title ${lightTheme ? '' : 'dark'}`}>Test Group</p>
                    </motion.div>

                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default Users
