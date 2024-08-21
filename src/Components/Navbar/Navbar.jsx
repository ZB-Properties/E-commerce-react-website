import React from 'react'
import './Navbar.css'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'



const Navbar = () => {


  return (
    <div className='navbar-container'>
      
    <div className='nav-list'>
      <div className='shop-menu'>
      <Link to='/shop'><button>Shop</button></Link>
      </div>

      <div className='navbar-title'>
       FRAGRANCE LAB
       </div>

       <div className='nav-menu'>
        <div className='nav-items'>
       <Link to='/register'><button>Register</button></Link>
       <Link to='/login'><button>Login</button></Link>
      
       <Link to='/Cart' style={{ textDecoration: 'none' }}>
       <img src={cart_icon} alt="" ></img>
      
       </Link>
        </div>

       </div>

       </div>

      
    </div>
  )
}

export default Navbar
