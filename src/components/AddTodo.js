import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Checkbox from '@mui/material/Checkbox';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

export default function AddTodo({ onSubmit, onChange, title }) {
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <span style={{ marginRight:'15px' }}>
                        {/* <input 
                        type="checkbox"                        
                        /> */}

                        {/* <Checkbox                            
                            icon={<CheckCircleOutlineIcon />}                        
                        /> */}
                        <RadioButtonUncheckedIcon
                            icon={<CheckCircleOutlineIcon />}
                            checkedIcon={<CheckCircleIcon />}
                            style={{ marginLeft:'10px'}}
                            className='circle'
                        />
                    </span>
                    <input
                        type="text"
                        name="title"
                        placeholder="Create a new todo..."
                        value={title}
                        onChange={onChange}
                        className='input'
                    />
                </div>
            </form>

        </div>
    )
}
