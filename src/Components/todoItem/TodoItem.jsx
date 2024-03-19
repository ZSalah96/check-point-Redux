import React from 'react';
import "./TodoItem.css";
import { useDispatch } from 'react-redux';
import { setCheck, deleteTodo } from '../../Redux/TodoSlice';

function TodoItem({ title, done, id }) {
    const dispatch = useDispatch();

    const handleCheckboxChange = () => {
        dispatch(setCheck(id));
    };

    const handleDeleteClick = () => {
        dispatch(deleteTodo(id));
    };

    return (
        <div className='todo-item'>
            <input
                type="checkbox"
                id={id}
                className='checkbox'
                checked={done}
                onChange={handleCheckboxChange}
            />
            <label htmlFor={id} className={done ? 'done' : ''}>{title}</label>
           
            <span className="trash" onClick={handleDeleteClick}>❌</span>
        </div>
    );
}

export default TodoItem;
