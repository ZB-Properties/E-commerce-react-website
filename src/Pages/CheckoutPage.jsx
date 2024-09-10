import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import './CSS/CheckoutPage.css'
import { useLocation, useNavigate } from 'react-router-dom'


const CheckoutPage = () => {

  const [show, setShow] = useState()
  const [activeTab, setActiveTab] = useState("visa")

  const handleTabChange = (tabId) => {
    setActiveTab(tabId)
  }

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/e-commerce-react-website"

  const handleConfirm = () => {
    alert("Your Order placement is successful!")
    localStorage.removeItem("cart");
    navigate(from, {replace: true})
  }

  return (
    <div>

     <div className='modal-card'>
        <Button variant='primary' className='checkout-button' onClick={handleShow}>Proceed To Checkout</Button>

        <Modal
         show={show}
         onHide={handleClose}
         animation={false}
         className='modal-fade'
         centered
        >
          <div className='modal-list'>

           <div className='modal-right'>
            <h5>Select Your Payment Method</h5>
            
           <div className='modal-option'>
            <div className='modal-option1'>
              <div className='nav nav-tabs' id='myTab' role='tablist'>
                <div className='nav-item' role='presentation'>
                <a className={`nav-link ${activeTab === "visa" ? "active" : ""}`} 
                id='visa-tab'
                data-toggle='tab'
                role='tab'
                aria-controls='visa'
                aria-selected={activeTab === "visa"}
                onClick={() => handleTabChange("visa")}
                href='#visa'>
                <img src='https://wallpapers.com/images/hd/visa-mastercard-logos-wh429a8o742pgm38.jpg' alt='' />
                </a></div>
              </div>
              </div>

              <div className='modal-option2'>
              <div className='nav nav-tabs' id='myTab' role='tablist'>
                <div className='nav-item' role='presentation'>
                <a className={`nav-link ${activeTab === "paypal" ? "active" : ""}`} 
                id='paypal-tab'
                data-toggle='tab'
                role='tab'
                aria-controls='paypal'
                aria-selected={activeTab === "paypal"}
                onClick={() => handleTabChange("paypal")}
                href='#paypal'>
                <img src='https://newsroom.paypal-corp.com/image/pp_h_rgb_logo_tn.jpg' alt='' />
                </a></div>
              </div>
            </div>
            </div>

            <div className='payment-content'>

            <form className='payment-form'>
               <div className='form-input'>
                <input type='text' name='name' id='name' required />
                <span>Cardholder Name</span>
                </div>

                <div className='form-input'>
                <input type='text' name='number' id='number' min='1' max='9999'required />
                <span>Card Number</span>
                </div>

                <div className='side-input'>
                <div className='form-input'>
                <input type='text' name='number' id='number' required />
                <span>Expiration date</span>
                </div>
                <div className='form-input'>
                <input type='text' name='number' id='number' required />
                <span>CVV</span>
                </div>
                </div>
             </form>
        
              </div>

            <button className='payment-btn' onClick={handleConfirm}>Add Card</button>
             
             <div className='payment-disclaimer'>
              <h6>Disclaimer: In no event shall partial payment by customer be refunded.</h6>
             </div>

            </div>
           </div>
        </Modal>
     </div>
      
    </div>
  )
}

export default CheckoutPage
