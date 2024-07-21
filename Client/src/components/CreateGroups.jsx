import React from 'react'
import { IconButton } from '@mui/material'
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded"

function CreateGroups() {
    return (
        <div className='createGroups-container'>
            <input placeholder='Enter the Group Name' className='search-box'/>
            <IconButton>
                <AddBoxRoundedIcon/>
            </IconButton>
        </div>
    )
}

export default CreateGroups
