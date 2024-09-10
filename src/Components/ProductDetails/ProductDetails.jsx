import React, { useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import my_products from '../Assets/my_products'
import { AiFillStar } from "react-icons/ai"
import './ProductDetails.css'
import { toast } from 'react-toastify'
import SimilarProduct from '../SimilarProducts/SimilarProduct'



const ProductDetails = () => {
  
    const {id} = useParams()
    const singleProduct = my_products.find((product) => product.id === id)
    const {i, title, imgURL3, category, price, reviews, note, description, quantity, review} = singleProduct
    
    const [prequantity, setQuantity] = useState(quantity)
    const [coupon, setCoupon] =useState("")
    const [tab, setTab] = useState(note)  
    const [rating, setRating] = useState("") 
    
     const reviewUser = useRef("")
     const reviewMsg = useRef("") 
    

     const submitHandler = (event) => {
     event.preventDefault()
       
     const reviewUserName = reviewUser.current.value;
     const reviewUserMsg = reviewMsg.current.value;

     const reviewObj = {
       userName: reviewUserName,
       text: reviewUserMsg,
       rating,
     };
      console.log(reviewObj);
      toast.success("Review Submitted!",{
      position: "top-right"
     });
   }
   
    const handleDecrease = () => {
        if(prequantity > 1) {
          setQuantity(prequantity - 1)
      }
   }
    const handleIncrease = () => {
      setQuantity(prequantity + 1)
    }
 
   const handleSubmit = (event) => {
    event.preventDefault();
	 const product = {
	   id: id,
	   imgURL3: imgURL3,
	   title: title,
	   price: price,
	   quantity: prequantity,
     coupon: coupon
	 }

  const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingProductIndex = existingCart.findIndex((product) => product.id === id);

    if(existingProductIndex !== -1){
    existingCart[existingProductIndex].quantity += prequantity;
    }else{
    existingCart.push(product)
    toast.success("Added to cart successfully!",{
      position: "top-right"
    });
  }
   localStorage.setItem("cart", JSON.stringify(existingCart));
    setQuantity(1);
    setCoupon("");
}


  return (
    <div>
      <div className='product-container' key={i}>
    <div className='display-left'>
       <div className='product-imglist'>
    <img src={imgURL3} alt=""  /> 
    <img src={imgURL3} alt=""  />
    <img src={imgURL3} alt=""  />
       </div>

       <div className='product-img'>
       <img src={imgURL3} alt="" className='product-main-img' />
       </div>
    </div>

    <div className='display-right'>
      <div className='product-details'>
          <h1>{title}</h1>
          <h3>Category: {category}</h3>
          <section className='product-reviews'>
        <AiFillStar className='ratings-star' />
        <AiFillStar className='ratings-star' />
        <AiFillStar className='ratings-star' />
        <AiFillStar className='ratings-star' />
        <AiFillStar className='ratings-star'/>
        <p>{reviews}</p>
        </section>
        <p className='product-desc'>{description}</p>
        
          
        <form onSubmit={handleSubmit}>
          <section className='promo'>
        
         <div className='plus-minus'>
          <div className='minus-btn' onClick={handleDecrease}>-</div>
          <input type="text"  name="btn" id="-btn" value={prequantity} onChange={(event) => setQuantity(parseInt(event.target.value, 10))} />
          <div className='plus-btn' onClick={handleIncrease}>+</div>
         </div>

        <div className='promo-input'>
         <input type="text" placeholder="Enter Promo Code" onChange={(event) => setCoupon(event.target.value)} />
        </div>
        </section>
        
        <div className='prices'>
        <p className='product-price'>PRICE= #{price}</p>
        </div>
        
        <div className='buttons'>
        <button className='add-btn'> Add to Cart</button>
       
        </div> 
        </form>  

        
      </div>
    </div>

      </div>
     
     <section>
      <div className='tab-wrapper'>
        <h4 className={`${tab === "note" ? "active_tab" : ""}`} onClick={() => setTab("note")}>
        Description</h4>
        <h4 className={`${tab === "rev" ? "active_tab" : ""}`} onClick={() => setTab("rev")}>Reviews</h4>
      </div>

    

      { tab === "note" ? (
      <div className='tab-content'>
        <p>{note}</p> 
      </div>
      ) : (
        <div className='review'>
          <div className='tab-review'>
          <h5>Nahimah Batin</h5>
          <span>{review} (rating)</span>
          <p>I love the packaging and swift delivery service.</p>
          </div>

          <div className='review-form'>
           <h4>Let us in on your experience with us!</h4>
            <form action="" onSubmit={submitHandler}>
              <div className='review-input'>
              <input type="text" placeholder="Enter name" ref={reviewUser}/>  
              </div>

              <div className='review-input'>
                
                 <span onClick={() => setRating(1)}>
                 1 <AiFillStar className='star' /></span> 
                 <span onClick={() => setRating(2)}>
                 2 <AiFillStar className='star' /></span>
                 <span onClick={() => setRating(3)}>
                 3 <AiFillStar className='star' /></span>
                 <span onClick={() => setRating(4)}>
                 4 <AiFillStar className='star' /></span>
                 <span onClick={() => setRating(5)}>
                 5 <AiFillStar className='star' /></span>
                 
              </div>
            
            <div  className='review-input'>
              <textarea ref={reviewMsg} rows={6} type="text" placeholder="Review Message..."/>
              </div> 
           
           <div className='review-btn'>
          <button type='submit' className='checkout-btn'>Submit</button>
          </div>

         </form>
          </div>

        </div>
      )
      }
     </section>
   
       <div className='similar'>
         <h2>You might also like</h2>

        <hr />

         <SimilarProduct />
       </div>        

  </div>   
  
  )
}

export default ProductDetails
