import React from 'react'
import './PopularCard.css'
import { Link } from 'react-router-dom'



const PopularCard = ({item,i}) => {

  const {id, title, imgURL3, category, price,} =item

  return (

    <Link style={{ textDecoration: 'none' , color: 'black' }} to={`/Card/${id}`} onClick={window.scrollTo(0, 0)}> 
    <div className='popular-item' key={i}>

  <img src={imgURL3} alt="" className='popular-img'/>

  <div className='popular-info'>
   <h3>{title}</h3>
   <span>{category}</span>
  </div>

  <div className='popular-bottom'>
   <span className='price'>#{price}</span>
  </div>
      

    </div>
    </Link>
  )
}

export default PopularCard
