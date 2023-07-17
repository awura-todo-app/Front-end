import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addTask } from "../state/taskSlice";
import './AddTodo.css';
import TodoList from './TodoList';

const AddTodo = () => {
	const [value, setValue] = useState('');

	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();

		if(value.trim().length === 0)
		{
			alert("Enter a task before adding !!");
			setValue("");
			return;
		}

		dispatch(
			addTask({
				task: value
			})
		);

		setValue("");
	};

	return (

		<div className='addTodo-container'>
      <div className='addTodo-group1'>
        <span className='addTodo-text'>
          <span>To Do List</span>
        </span>
        <input
					type="text"
					placeholder="Add task"
					value={value}
					className='addTodo-rectangle2'
					onChange={(event) => setValue(event.target.value)}
				></input>
				<button className="addTodo-button" onClick={onSubmit}>
			 		<span className='addTodo-button-text'>Add</span>
			 	</button>
				<div className='TodoList-container'>
					<TodoList />
				</div>
			</div>
    </div>
	);
};

export default AddTodo;
