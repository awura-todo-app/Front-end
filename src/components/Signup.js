import { useState } from "react";
import "./FOF.css"
const SignUp = ()=>{
  const [value, setValue] = useState()
  const [password, setPassword] = useState()
  return(
    <div className='FOF-container'>
		
    <div className='FOF-group3'>
    <input
					type="text"
					placeholder="uset name or email"
					value={value}
					className='FOF-input FOF-input-email'
					onChange={(event) => setValue(event.target.value)}
				></input>
    <input
					type="text"
					placeholder="password"
					value={password}
					className='FOF-input FOF-input-password'
					onChange={(event) => setPassword(event.target.value)}
				></input>
				<button className="FOF-button" >
			 		<span className='addTodo-button-text'>Sign up</span>
			 	</button>
    </div>
  </div>
  )
}

export default SignUp;