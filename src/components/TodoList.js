import React, { useState, useEffect } from 'react'
import AddTodo from './AddTodo'
import Todos from './Todos'
import Card from './Card'
import List from './Data'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

export default function TodoList() {
    const [title, setTitle] = useState('')
    const [todos, setTodos] = useState(List.getList())
    const [itemsLeft, setItemsLeft] = useState(1)


    const onSubmit = (e) => {
        e.preventDefault()
        let todo = {
            id: todos.length + 1,
            title: title,
            active: true
        }
        setTodos([...todos, todo])
        setTitle('')
        List.saveList(todos)
    }

    const onChange = (e) => {
        e.preventDefault()
        setTitle(e.target.value)
        console.log(title)
    }

    const getItemsLeft = () => {
        const active = todos.filter(todo => todo.active === true)
        setItemsLeft(active.length)
    }

    useEffect(() => {
        getItemsLeft()
    }, [todos, setTodos])
    
    const deleteTask = (id) => {
        const newTodos = todos.filter(
            todo => todo.id !== id
        )
        setTodos(newTodos)
        List.saveList(todos)
    }

    const toggleComplete = (id) => {
        const newTodos = todos.map((todo) => todo.id === id ? { ...todo, active: !todo.active } : todo)
        setTodos(newTodos)
        List.saveList(todos)
    }

    const getAll = () => {
        setTodos(List.getList())
        //setTodos(Todos)
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
        setItemsLeft(active.length)
    }

    return (
        <div className='row'>
            <DragDropContext
                onDragEnd={(param) => { 
                    const sourceIndex = param.source.index
                    const destinationIndex = param.destination?.index
                    if(destinationIndex){
                        todos.splice(destinationIndex, 0, todos.splice(sourceIndex,1)[0])
                        List.saveList(todos)
                    }                    
                }}
            >
                <AddTodo
                onSubmit={onSubmit}
                onChange={onChange}
                title={title}
            />
            <Droppable droppableId="droppable-1">
                {(provided, _) => (
                    <div className='card-container' ref={provided.innerRef} {...provided.droppableProps}>
                        {todos.map((todo,index) => (
                            <Draggable
                                key={todo.id}
                                draggableId={"draggable-" + todo.id}
                                index={index}
                            >
                              {(provided, snapshot) => (
                                  <div
                                    className='card'
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{ 
                                        ...provided.draggableProps.style,
                                        boxShadow: snapshot.isDragging ? "0 0 .4rem #666" : 'none',
                                        opacity: snapshot.isDragging ? .7 : 1,
                                    }}
                                  >      
                                       
                                        <Card
                                            title={todo.title}
                                            status={todo.active}
                                            markComplete={() => toggleComplete(todo.id)}
                                            key={todo.id}
                                            deleteTask={() => deleteTask(todo.id)}
                                        
                                        />
                                                                             
                                 </div>  
                                 
                              )} 
                            </Draggable>                           
                        )
                    )}
                    {provided.placeholder}
                    <div className='card'>
                        <h5 className='item'>{itemsLeft} items left</h5>
                        <h5 className='item' onClick={clearCompleted} style={{ cursor: 'pointer' }}>Clear Completed</h5>            
                    </div>
                </div>
                )}
            </Droppable>

            
            <div className='footer-menu'>
                <h5 className='item item-left'>{itemsLeft} items left</h5>
                <div className='mid-item'>
                    <h5 className='item' onClick={getAll} style={{ cursor: 'pointer' }}>All</h5>
                    <h5 className='item' onClick={getActive} style={{ cursor: 'pointer' }}>Active</h5>
                    <h5 className='item' onClick={getCompleted} style={{ cursor: 'pointer' }}>Completed</h5>
                </div>
                <h5 className='item item-right' onClick={clearCompleted} style={{ cursor: 'pointer' }}>Clear completed</h5>
            </div>
            </DragDropContext>
            <div className='foot'>
                <h5>Drag and drop to reorder list</h5>
            </div>
        </div>
    )
}
