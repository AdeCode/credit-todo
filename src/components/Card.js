import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Checkbox from '@mui/material/Checkbox';
import CloseIcon from '@mui/icons-material/Close';

export default function Card({title,deleteTask,markComplete,status}) {
  return (
    <div className='card'>
        {/* <input 
            type="checkbox" 
            checked={!status} 
            onChange={markComplete}
        /> */}
        <Checkbox
            checked={!status} 
            onChange={markComplete}
            icon={<CheckCircleOutlineIcon />}
            checkedIcon={<CheckCircleIcon />}
        
        />
        <span className={status===false ? 'completed title' : 'title'}>{title}</span>
        <CloseIcon
            onClick={() => deleteTask()}
        />
        {/* <button onClick={() => deleteTask()}>Delete</button> */}
    </div>
  )
}
