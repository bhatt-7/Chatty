import React, { useState } from 'react'
import './myStyles.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import SearchIcon from '@mui/icons-material/Search';
import LightModeIcon from '@mui/icons-material/LightMode';
import ConversationsItem from './ConversationsItem';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../Features/themeSlice';
import Conversations from './Conversations';

function SideBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lightTheme = useSelector((state) => state.themeKey);
 

  return (
    <div className={`sidebar-container ${lightTheme ? '' : 'bhura'}`}> 
      <div className={`sb-header ${lightTheme ? '' : 'dark'}`}>
        <div>
          <IconButton>
            <AccountCircleIcon className={`icon ${lightTheme ? '' : 'dark'}`} />
          </IconButton>
        </div>
        <div>
          <IconButton onClick={() => navigate("users")}>
            <PersonAddIcon className={`icon ${lightTheme ? '' : 'dark'}`} />
          </IconButton>
          <IconButton onClick={() => navigate("groups")}>
            <GroupAddIcon className={`icon ${lightTheme ? '' : 'dark'}`} />
          </IconButton>
          <IconButton onClick={() => navigate("create-groups")}>
            <AddCircleIcon className={`icon ${lightTheme ? '' : 'dark'}`} />
          </IconButton>

          <IconButton onClick={() => dispatch(toggleTheme())}>
            {lightTheme ? <NightlightIcon className={`icon ${lightTheme ? '' : 'dark'}`} /> : <LightModeIcon className={`icon ${lightTheme ? '' : 'dark'}`} />}
          </IconButton>
        </div>
      </div>
      <div className={`sb-search ${lightTheme ? '' : 'dark'}`}>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input type="text" placeholder='search' className={`search-box ${lightTheme ? '' : 'dark'}`} />
      </div>
     <Conversations/>
    </div>
  )
}

export default SideBar;
