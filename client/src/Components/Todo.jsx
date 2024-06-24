import React, { useState } from 'react'
import './Todo.css';

const Todo = () => {

  const [todo, setTodo]=useState("");
  const [list, setList]=useState([]);

  const handleChange=(e)=>{
    setTodo(e.target.value);
    console.log(todo);
  }

  const handleClick=()=>{
    setList([...list, todo]);
    console.log(list);
    setTodo('');
    console.log(todo);
  }

  const handleDelete=(index)=>{
    setList(list.filter((_, id)=>{
      return id!==index;
    }));
  }

  return (

      <div className='todo'>
        <div className='todo-header'>
          <input type='text' placeholder='create a todo' onChange={handleChange} value={todo}/>
          <button onClick={handleClick}>+</button>
        </div>
        <div className='todo-body'>
        <ul>
          {
            list.map((item, index)=>(
              <div className='todo-item'>
              <li key={index}>{item}</li>
              <button onClick={()=>{handleDelete(index)}}>-</button>
              </div>
            ))
          }
          </ul>
        </div>
      </div>

  )
}

export default Todo
