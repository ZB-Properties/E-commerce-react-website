import React from 'react'
import './Service.css'
import { FaTruck } from "react-icons/fa"
import { FcCustomerSupport } from "react-icons/fc"
import { MdHighQuality } from "react-icons/md"


const Services = () => {
  return (
    <div>
      <section className='service-card'>
       
         <div className='service-item'>
         <div className='service-icon'>
         <FaTruck />
         </div>
         <h3>Swift Shipping.</h3>
         <p>Our delivery services and personnels ensure you get your packages in the best conditions  with a subsidized shipping fee.</p>
         </div>

         <div className='service-item-'>
         <div className='service-icon'>
         <FcCustomerSupport />
         </div>
         <h3>Customer Service.</h3>
         <p>Our esteemed customer service representatives are very polite and quite reputable, always available to solve your problems with immediate effect.</p>
         </div>

         <div className='service-item_'>
         <div className='service-icon'>
         <MdHighQuality />
         </div>
         <h3>Quality Products.</h3>
         <p>We sell not just quantity but Quality products to our customers to ensure their loyalty to our brand/store</p>
         </div>
        
      </section>
    </div>
  )
}

export default Services
