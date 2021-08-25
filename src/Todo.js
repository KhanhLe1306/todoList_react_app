import React from 'react'

export default function Todo({ todo, completeToggle }) {
    function handleToggle() {
        completeToggle(todo.id)
    }
    return (
        <div>
            <label className='container'>{todo.name}
                <input type='checkbox' checked={todo.completed} onChange={handleToggle} />
                <span className='checkmark'></span>
            </label>
        </div>
    )
}
