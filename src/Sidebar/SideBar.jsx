import React from 'react'
import './SideBar.css'
import Price from '../Price/Price'
import Colors from '../Colors/Color'
import Variety from '../Variety/Variety'
import { GiShoppingCart } from "react-icons/gi"



const SideBar = ({handleChange}) => {

  return (
    <>
      <section className='sidebar'>
      <div className='logo-container'>
      <GiShoppingCart className='logo-container-icon'/>
      </div>
    
      <Variety handleChange={handleChange}/>
      <Price handleChange={handleChange}/>
      <Colors handleChange={handleChange}/>
    </section>
     
    </>
  )
}

export default SideBar
