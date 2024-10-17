import React from 'react'
import './todo.css'

function Todo({text,index,todo,settodo}) {

    function handleDelete(){
       const updatedTodo =  todo.filter((_,i) => i!== index)
       settodo(updatedTodo)
    }
  return (
    <div className='todos'>
        <p>{text}</p>
        <div className="action-icons">
        <i className="fa-solid fa-trash fa-xl" onClick={handleDelete}></i>
        </div>
    </div>
  )
}

export default Todo