import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Checkbox from '@mui/material/Checkbox';
import CloseIcon from '@mui/icons-material/Close';
import cross from '../images/icon-cross.svg'
import favicon from '../images/favicon-32x32.png'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';



export default function Card({title,deleteTask,markComplete,status}) {
  return (
    <div className='card'>      
        {/* <Checkbox
            checked={!status} 
            onChange={markComplete}
            icon={<CheckCircleOutlineIcon />}
            checkedIcon={<CheckCircleIcon />}
        
        /> */}

        {status===true ? 
            <RadioButtonUncheckedIcon
                checked={!status} 
                onClick={markComplete}
                icon={<CheckCircleOutlineIcon />}
                checkedIcon={<CheckCircleIcon />}
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
            <img src={cross} onClick={() => deleteTask()}/>
        {/* <CloseIcon
            onClick={() => deleteTask()}
        /> */}
        </span>
        
        {/* <button onClick={() => deleteTask()}>Delete</button> */}
    </div>
  )
}
