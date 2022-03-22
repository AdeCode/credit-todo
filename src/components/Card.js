import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Checkbox from '@mui/material/Checkbox';
import CloseIcon from '@mui/icons-material/Close';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';


export default function Card({title,deleteTask,markComplete,status}) {
  return (
    <div className='card-item'>              
        {status===true ? 
            <RadioButtonUncheckedIcon
                checked={!status} 
                onClick={markComplete}
                icon={<CheckCircleOutlineIcon />}
                style={{ marginLeft:'10px' }}
                className='circle'
            />
            :
            <Checkbox
                checked={!status} 
                onChange={markComplete}
                icon={<CheckCircleOutlineIcon />}
                checkedIcon={<CheckCircleIcon />}
            
            />
        }
         
        <span className={status===false ? 'completed title' : 'title'}>{title}</span>
        <span className='close'>
            <CloseIcon onClick={() => deleteTask()} />
        </span>        
    </div>
  )
}
