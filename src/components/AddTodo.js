import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Checkbox from '@mui/material/Checkbox';

export default function AddTodo({ onSubmit, onChange, title }) {
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <span>
                        {/* <input 
                        type="checkbox"                        
                        /> */}

                        <Checkbox                            
                            icon={<CheckCircleOutlineIcon />}                        
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
