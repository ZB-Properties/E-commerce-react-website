import React from 'react'
import './NewsLetter.css'

const Newsletter = () => {
  return (
    <div className='newsletter-container'>
    <div className='newsletter_content'>
 <div className='newsletter'>
 <h3 className='newsletter_title'> Wanna get Exclusive Offers on your Email? </h3>
 <p>Subscribe to get the latest news from us to you.</p>
 <form action='' className='newsletter_form'>
  <input type='text' placeholder='Enter your Email...' />
  <button> Subscribe</button>
  </form>
</div>

</div>
      
    </div>
  )
}

export default Newsletter
