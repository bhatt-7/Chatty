import React from 'react'
import './myStyles.css'
import { useSelector } from 'react-redux'

function MessageOthers() {
    var props1 = { name: "RandomUser", message: "This is a sample message" }
    const lightTheme = useSelector((state)=>state.themeKey)
    return (
        <div className={`other-message-container ${lightTheme ? '' : 'dark'}`}>
            <div className={`conversation-container ${lightTheme ? '' : 'dark'}`}>
                <p className={`con-icon ${lightTheme ? '' : 'bhura'}`}>{props1.name[0]}</p>
                <div className={`other-text-content ${lightTheme ? '' : 'dark'}`}>
                    <p className={`con-title ${lightTheme ? '' : 'dark'}`}>{props1.name}</p>
                    <p className={`con-lastMessage ${lightTheme ? '' : 'dark'}`}>{props1.message}</p>
                    <p className={`self-timeStamp ${lightTheme ? '' : 'dark'}`}>12:00am</p>
                </div>
            </div>
        </div>
    )
}

export default MessageOthers
