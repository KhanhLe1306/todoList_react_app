import React from 'react'
import Todo from './Todo'

export default function ShowTodos({ todos, completeToggle }) {
    return (
        <div className='todos'>
            {todos.map(todo => {
                return <Todo key={todo.id} todo={todo} completeToggle={completeToggle} />
            })}
        </div>
    )
}
