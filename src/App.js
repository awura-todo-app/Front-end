import React from 'react';
import Header from './components/header';
import AddTodo from './components/AddTodo';
import { BrowserRouter as Router,Routes,Navigate, Route,Outlet, Switch, Link } from 'react-router-dom';
import Fof from './components/Login';
import SignUp from './components/Signup';

const App = () => {
	const aute=true
	return (
		<Router>
			<div className='container'>
				<div className='home'>
						<Header aute={aute} />
					<Routes>
					<Route path='/login' element={<Fof />} />
					<Route path='/sugnup' element={<SignUp />} />
						<Route
							element={
								aute ? <Outlet /> : <Navigate to={'/login'} replace />
							}
						>
							<Route path={'/'} element={<AddTodo />} />
						</Route>
					</Routes>
				</div>
			</div>
			</Router>
	);

};

export default App;
