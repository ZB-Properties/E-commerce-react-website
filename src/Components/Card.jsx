import React from 'react'
import { AiFillStar } from "react-icons/ai"
import { BsFillBagHeartFill } from "react-icons/bs"
import { Link } from 'react-router-dom'



const Card = ({id, imgURL3, title, category, reviews, price}) => {
  
  return (
    <Link style={{ textDecoration: 'none' , color: 'black' }} to={`/Card/${id}`} >
    <section className='card' key={id}>
       <img src={imgURL3}
        alt='' className='card-img' />
       
     <div className='card-details'>
        <h3 className='card-title'>
        {title}
        </h3>
        <h4 className='card-category'>{category}</h4>
        <section className='card-reviews'>
        <AiFillStar className='ratings-star'/>
        <AiFillStar className='ratings-star'/>
        <AiFillStar className='ratings-star'/>
        <AiFillStar className='ratings-star'/>
        <AiFillStar className='ratings-star'/>
        <span className='total-reviews'>{reviews}</span>
        </section>

    <section className='card-price'>
       <div className='price'>
        #{price}</div>
      <div className='bag'>
      <BsFillBagHeartFill className='bag-icon' />
	  </div>
  </section>

  </div>
  </section>
     </Link>
  )
}

export default Card
