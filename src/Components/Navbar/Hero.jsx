import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'


const Hero = () => {
  return (
    <>
      
      <section className='hero'>
     <div className='hero-content'>
     <span className='badge'>Let us help you and your home smell divine with our different scent choices.</span>

	 <h2 className='hero-title'> Hi Esteemed Customer, would you like to choose from our variation of perfumes & diffusers? 
     <span className='hero-span'>Click on the button below to get started.</span> 
     </h2>
      
      <Link style={{ textDecoration: 'none' , color: 'black' }} to='/Home'><button className='hero-btn'>Get Started</button>
      </Link>
     </div>

      </section>
    </>
  )
}

export default Hero
