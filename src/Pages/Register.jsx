import React from 'react'
import { Link } from 'react-router-dom'
import './CSS/Register.css'

const Register = () => {
  return (
    <div>

    <div className='signup-container'>
      <form action="" method="POST">
  <h2>Register</h2>
  <input type="text" placeholder="Enter your First name" className="box" />
  <input type="text" placeholder="Enter your Last name" className="box" />
  <input type="email" placeholder="Enter your Email" className="box" />
  <input type="password" placeholder="Enter Password" className="box" />
  <input type="password" placeholder="Confirm Password" className="box" />
  <p>Already have an account? 
  <Link style={{ textDecoration: 'none' , color: 'rgb(153, 0, 153)' }} to='/login'>Log in</Link>
  </p>
  <button type="submit" value="register now" name="Sign Up">Register</button> 
 </form>
      
    </div>
    </div>
  )
}

export default Register

