import React from 'react'
import { Link } from 'react-router-dom'
import './CSS/Login.css'

const Login = () => {
  return (
    <div className='login'>
     <form>
      <div className='form-container'>
      <h2>Log In</h2>

      <div className='login-field'>
      <label for="Email"><b>Email</b></label>
     <input type="text" placeholder="Enter Email" name="Email" required />
     <label for="password"><b>Password</b></label>
     <input type='text' placeholder="Enter Password" required />
      </div>
     <button type="submit">Continue</button>
      
     <div className='register'>
        <p>Forgot Password?</p>
        <p>Not Registered? 
        <Link style={{ textDecoration: 'none' , color: 'rgb(153, 0, 153)' }} to='/register'>Register</Link>
        </p>
        <div className='login-agree'>
        <input type="checkbox" name='' id='' />
        <p>By continuing, I agree to the terms of Use and Privacy Policy.</p>
         </div>
         </div>
     
     </div>
     </form>
      
    </div>
  )
}

export default Login
