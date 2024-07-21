import React, { useState } from 'react'
import './myStyles.css'
import Sidebar from './Sidebar'
import ChatArea from './ChatArea'
import Welcome from './Welcome'
import CreateGroups from './CreateGroups'
// import Users_Groups from './Users'
import Users from './Users'
import { Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const MainContainer = () => {
  const lightTheme = useSelector((state)=>state.themeKey) 
  const dispatch = useDispatch();
  return (
    <div className='main-container'>
      <Sidebar />
      <Outlet/>
      {/* <Welcome/> */}
      {/* <CreateGroups/> */}
      {/* <ChatArea props={conversations[0]} /> */}
      {/* <Users/> */}
    </div>
  )
}

export default MainContainer
