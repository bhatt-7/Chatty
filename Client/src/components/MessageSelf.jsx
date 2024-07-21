import React from 'react'
import './myStyles.css'
import { useSelector } from 'react-redux'

function MessageSelf() {
    var props2 = {name:"You",message:"This is a Sample Message"}
    const lightTheme = useSelector((state)=>state.themeKey)
    return (
        <div className='self-message-container'>
            <div className={`messageBox ${lightTheme ? '' : 'dark'}`}>
                <p style={{padding:"10px"}}>{props2.message}</p>
                <p className={`self-timeStamp ${lightTheme ? '' : 'dark'}`}>12:00am</p>
            </div>
        </div>
    )
}

export default MessageSelf;
