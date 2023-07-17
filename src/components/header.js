import React from 'react';
import { useDispatch } from "react-redux";
import { deleteTask } from "../state/taskSlice";
import './header.css';

const Header = ({ aute }) => {

	if(aute===false){
		return(
		<div className='header-container'>
		<div className='header'>
			<span className='header-title'>
				<span>Awura todo</span>
			</span>
			<div className="header-buttons" style={{ display: 'flex'}}>
				<button className='header-button'>
					<span className='header-text'>Sign in</span>
				</button>
				<button className='header-button'>
					<span className='header-text'>Log in</span>
				</button>
			</div>
		</div>
	</div>
	);
	}else{
	return (
		<div className='header-container'>
		<div className='header'>
			<span className='header-title'>
				<span>Awura todo</span>
			</span>
			<div className="header-buttons" style={{ display: 'flex'}}>
				<button className='header-button'>
					<span className='header-text'>Log out</span>
				</button>
			</div>
		</div>
	</div>
	);
	}
};

export default Header;