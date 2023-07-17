import React from 'react';
import { Link } from "react-router-dom";
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
				<Link to="/" className='header-title-text'>Awura todo</Link>
			</span>
			<div className="header-buttons" style={{ display: 'flex'}}>
				<Link to="/login" className='header-button'>
					<span className='header-text'>Log out</span>
				</Link>
				<Link to="/signup" className='header-button'>
					<span className='header-text'>Sign in</span>
				</Link>
				<Link to="/Todo" className='header-button'>
					<span className='header-text'>Todo list </span>
				</Link>
			</div>
		</div>
	</div>
	);
	}
};

export default Header;