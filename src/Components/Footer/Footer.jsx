import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/footer_logo.jpeg'
import { FaInstagram } from "react-icons/fa"
import { FaFacebookSquare } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { FaSquareWhatsapp } from "react-icons/fa6"


const Footer = () => {
  return (
    <div  className='footer'>
    <div className='footer-logo'>
      <img src={footer_logo} alt="" />
      <p>Shopper</p>
    </div>
    <ul className='footer-links'>
      <li>Product</li>
      <li>Office</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
    <div className='footer-social'>
      <div className='footerIcons-container'>
      <FaInstagram className='footer-img'/>
      </div>
      <div className='footerIcons-container'>
      <FaFacebookSquare className='footer-img'/>
      </div>
      <div className='footerIcons-container'>
      <FaXTwitter className='footer-img'/>
      </div>
      <div className='footerIcons-container'>
      <FaSquareWhatsapp className='footer-img'/>
      </div>
    </div>
      
    <div className='copyright'>
        <hr />
        <p>Copyright @ 2024 - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
