import React from 'react';
import { useDispatch } from "react-redux";
import { deleteTask } from "../state/taskSlice";
import './TodoItem.css';

const TodoItem = ({ id, title }) => {

	const dispatch = useDispatch();

	const removeTask=()=>{
		dispatch(
			deleteTask({
				id: id
			})
		)
	}

	return (
		<div className="Todo-Item">
			<div class="tasks">
				<div class="task" data-id="1689516959241">
					{title}
					<span style={{color: 'red'}} onClick={()=>{removeTask();}}>
						!Del
					</span>
				</div>
			</div>
			
			{/* <div>
				{title}
			</div>
			<div>
				<button className="remove-task-button" onClick={()=>{
					removeTask();
				}}>Delete</button>
			</div>  */}
		</div>
	);
};

export default TodoItem;