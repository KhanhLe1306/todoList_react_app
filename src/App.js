import { useState, useRef, useEffect } from 'react'
import styles from './styles.css'
import ShowTodos from './ShowTodos'
import Header from './Header'
import { v4 } from 'uuid'

function App() {
  const [todos, setTodos] = useState([])

  const todoNameRef = useRef()
  const KEY_LOCAL_STORAGE = 'todo_key'

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem(KEY_LOCAL_STORAGE)))
  }, [])

  useEffect(() => {
    localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(todos))
  }, [todos])

  function addTodo() {
    if (todoNameRef.current.value) {
      const name = todoNameRef.current.value;
      setTodos(previousTodos => {
        return [...previousTodos, { id: v4(), name: name, completed: false }]
      })
      todoNameRef.current.value = null;
    }
  }

  function onKeyDown(e) {
    if (e.key === 'Enter') {
      addTodo()
    }
  }

  function clearCompletedTodo() {
    setTodos(todos.filter(todo => !todo.completed))
  }

  function completeToggle(id) {
    const newTodos = [...todos];
    const modifiedTodo = newTodos.find(newTodo =>
      newTodo.id === id)
    modifiedTodo.completed = !modifiedTodo.completed;
    setTodos(newTodos)
  }

  return (
    <>
      <div className='app'>
        <Header />
        <ShowTodos todos={todos} completeToggle={completeToggle} />
        <div className='input-section'>
          <input ref={todoNameRef} type='text' onKeyDown={onKeyDown} />
          <button onClick={addTodo}>Add</button>
          <button onClick={clearCompletedTodo} >Clear Completed</button>
        </div>
        <div className='left-to-complete'>{todos.filter(todo => !todo.completed).length} left to complete</div>
      </div>
      <span className='circle1'></span>
      <span className='circle2'></span>
      <img className='react-img' src='https://www.pinclipart.com/picdir/middle/537-5374089_react-js-logo-clipart.png'></img>
    </>
  );
}

export default App;
