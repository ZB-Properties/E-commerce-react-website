import React from 'react'
import './SimilarProduct.css'
import { Link } from 'react-router-dom'



const SimilarProductCard = ({item, i}) => {

  const {id, title, imgURL3, category, price,} =item

  return (

    <Link style={{ textDecoration: 'none' , color: 'black' }} to={`/Card/${id}`} onClick={window.scrollTo(0, 0)}>
    <div className='similar-items' key={i}>
      <img src={imgURL3} alt="" className='similar-img'/>

     <div className='similar-info'>
     <h3>{title}</h3>
     <span>{category}</span>
    </div>

     <div className='similar-bottom'>
     <span className='price'>#{price}</span>
    </div>

    
    </div>
    </Link>

  )
}

export default SimilarProductCard
