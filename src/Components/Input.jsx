import React, { useState } from 'react'
import "./Input.css"
import { useDispatch } from 'react-redux';
import { saveTodo } from '../Redux/TodoSlice';


function Input() {
    const [input, setInput] = useState("");
    const dispatch =useDispatch()
    const handleAdd =() => {
        if(input){
          dispatch(saveTodo({
            id : Date.now(),
            title : input,
            done : false, 
          }))
          setInput("");
        }
        else{alert("enter please a task....")
      }
    }
  return <form onSubmit={handleAdd} className='input-container'>
    <input type='text' onChange={(e)=> setInput(e.target.value)} placeholder='enter a task...'/>
    <button type='submit' className='btn'>Add task</button>
  </form>
}

export default Input;