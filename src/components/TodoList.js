import React, { useState, useEffect } from 'react'
import AddTodo from './AddTodo'
import Todos from './Todos'
import Card from './Card'

export default function TodoList() {
    const [title, setTitle] = useState('')
    const [todos, setTodos] = useState(Todos)

    const onSubmit = (e) => {
        e.preventDefault()
        let todo = {
            id: todos.length + 1,
            title: title,
            active: 'true'
        }
        setTodos([...todos, todo])
        setTitle('')
    }

    const onChange = (e) => {
        e.preventDefault()
        setTitle(e.target.value)
        console.log(title)
    }

    const deleteTask = (id) => {
        const newTodos = todos.filter(
            todo => todo.id !== id
        )
        setTodos(newTodos)
    }

    const toggleComplete = (id) => {
        const newTodos = todos.map((todo) => todo.id === id ? { ...todo, active: !todo.active } : todo)
        setTodos(newTodos)
    }

    const getAll = () => {
        setTodos(Todos)
    }

    const getCompleted = () => {
        const completed = todos.filter(todo => todo.active === false)
        setTodos(completed)
    }

    const clearCompleted = () => {
        const clearCompleted = todos.filter(todo => todo.active !== false)
        setTodos(clearCompleted)
    }
    const getActive = () => {
        const active = todos.filter(todo => todo.active === true)
        setTodos(active)
    }

    return (
        <div className='row'>
            <AddTodo
                onSubmit={onSubmit}
                onChange={onChange}
                title={title}
            />

            <div>
                {todos.map((todo) => {
                    return (
                        <Card
                            title={todo.title}
                            status={todo.active}
                            markComplete={() => toggleComplete(todo.id)}
                            key={todo.id}
                            deleteTask={() => deleteTask(todo.id)}
                        />
                    )
                }
                )}

                <div className='footer-menu'>
                    <h5 className='item'>{todos.length} items left</h5>
                    <div className='mid-item'>
                        <h5 className='item' onClick={getAll} style={{ cursor:'pointer' }}>All</h5>
                        <h5 className='item' onClick={getActive} style={{ cursor:'pointer' }}>Active</h5>
                        <h5 className='item' onClick={getCompleted} style={{ cursor:'pointer' }}>Completed</h5>
                    </div>
                    <h5 className='item' onClick={clearCompleted} style={{ cursor:'pointer' }}>Clear completed</h5>
                </div>
            </div>

        </div>
    )
}
