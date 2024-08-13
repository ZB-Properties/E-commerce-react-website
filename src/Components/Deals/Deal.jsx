import React from 'react'
import './Deal.css'
import TimerCount from './TimerCount'
import { Link } from 'react-router-dom'


const Deal = () => {
  return (
    <div className='deal-container'>

      <img src="https://m.media-amazon.com/images/I/71bTpuLg8yL.jpg"
     alt="" className='deal-img' />
    
     <div className='deal-content'>
     <h3>Limited Offers</h3>
     <h2>on our Perfume Oils</h2>
    
      <TimerCount /> 
      <Link style={{ textDecoration: 'none' }} to='/shop'><button className='deal-btn'>
      Visit Store</button></Link> 
      </div>


    </div>
  )
      
}

export default Deal
