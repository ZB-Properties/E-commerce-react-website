import React, { useEffect, useState } from 'react'
import './CSS/Cart.css'
import { Link } from 'react-router-dom'
import { MdOutlineDelete } from "react-icons/md"
import CheckoutPage from './CheckoutPage'


const Cart = () => {

  const [cartItems, setCartItems] = useState([])

  useEffect(() =>{
     const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
     setCartItems(storedCartItems);
  }, [])

  const calculateTotalPrice = (item) => {
     return item.price * item.quantity;
  }

  const handleIncrease = (item) => {
      item.quantity += 1; 
      setCartItems([...cartItems]);

      localStorage.setItem("cart", JSON.stringify(cartItems));
  }
  const handleDecrease = (item) => {
     if(item.quantity > 1){
       item.quantity -= 1
    setCartItems([...cartItems]);
     }
     localStorage.setItem("cart", JSON.stringify(cartItems));
  }

  const removeFromCart = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
      setCartItems(updatedCart);

      updateLocalStorage(updatedCart)
  }
  const updateLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }

  const cartSubTotal = cartItems.reduce((total, item) => {
      return total + calculateTotalPrice(item)
  }, 0)

   const orderTotal = cartSubTotal;

  return (
    <div>
      
      <div  className='cart-items'>
        
      <div className='cart-main'>
              <h3>Product</h3>
              <h3>Title</h3>
              <h3>Price</h3>
              <h3>Qty</h3>
              <h3>Total</h3>
              <h3>Remove</h3>
              </div>
  
            <hr /> 
            {
              cartItems.map((item, i) => (
                <div key={i}>
                <div className='cart-list cart-main'>
                    <div className='cart-img'>
                      <Link to='/shop'><img src={item.imgURL3} alt='' /></Link>
                    </div>
                   
                   <div className='cart-title'>
                    {item.title}
                    </div>
                    
                  <div className='cart-price'> #{item.price}</div>
                  <div className='cart-quantity'>
                    <div className='cart-plus-minus'>
                      <div className='decrease-qty' onClick={() => handleDecrease(item)}>-</div>
                      <input type='text' className='cart-plus-minus-box' 
                        name='qty' value={item.quantity} />
                     <div className='increase-qty' onClick={() => handleIncrease(item)}>+</div>
                    </div>
                  </div>
                  <div className='cart-total'>#{calculateTotalPrice(item)}</div>
                  <div className='cart-delete'><MdOutlineDelete onClick={() => removeFromCart(item)}/></div>

                  
                  </div>
                  <hr />
                </div>
              
              ))
            }
         </div>
      
         <div className='cart-down'>  
               
           <form className='coupon'>
           <p>If you have a promo code, do enter it here</p>
            <input type="text" placeholder="Coupon Code..." name='coupon' id='coupon' />
            <button className='apply'>Apply Coupon</button>
           </form>

          <div className='cart-bottom'>
        <div className='total-box'>
         <div className='total-heading'>
          <h2>Cart Total</h2>
          </div>
          
           <div className='total-item cart-bottom'>
            <h4>SubTotal</h4>
            <p>#{cartSubTotal}</p>
            </div>

            <hr />
            <div className='total-item cart-bottom'>
            <h4>Shipping fee</h4>
            <p>#0</p>
            </div>

            <hr />
            <div className='total-item cart-bottom'>
            <h3>Total</h3>
            <p>#{orderTotal.toFixed(2)}</p>
            </div>
            <hr />
           
            </div>

           <form className='cart-button'>
             <CheckoutPage />
            <Link style={{ textDecoration: 'none' }} to='/shop'><button className='shopping-btn'>Continue Shopping</button></Link>
            </form>
          

        </div>
             </div>

    </div>
  )
}

export default Cart
