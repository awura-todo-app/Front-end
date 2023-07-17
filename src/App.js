import React from 'react';
import Header from './components/header';
import AddTodo from './components/AddTodo';
import { BrowserRouter as Router,Routes,Navigate, Route,Outlet} from 'react-router-dom';
import Fof from './components/Login';
import SignUp from './components/Signup';
import Body from './components/body.js'
const App = () => {
	const aute=true
	return (
		<Router>
			<div className='container'>
				<div className='home'>
						<Header aute={aute} />
					<Routes>
					<Route path='/login' element={<Fof />} />
					<Route path='/signup' element={<SignUp />} />
						<Route
							element={
								aute ? <Outlet /> : <Navigate to={'/login'} replace />
							}
						>
							<Route path={'/Todo'} element={<AddTodo />} />
							<Route path={'/'} element={<Body/>}/>
						</Route>
					</Routes>
				</div>
			</div>
			</Router>
	);

};

export default App;
