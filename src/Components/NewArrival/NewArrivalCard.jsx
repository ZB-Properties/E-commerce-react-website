import React from 'react'
import './NewArrivalCard.css'
import { Link } from 'react-router-dom'


const NewArrivalCard = ({item, i}) => {

  const {id, title, imgURL3, category, price,} =item

  return (
    <Link style={{ textDecoration: 'none' , color: 'black' }} to={`/Card/${id}`} onClick={window.scrollTo(0, 0)}>
    <div className='new-items' key={i} >
    <img src={imgURL3} alt="" className='new-img'/>

     <div className='new-info'>
     <h3>{title}</h3>
     <span>{category}</span>
     </div>

    <div className='new-bottom'>
     <span className='price'>#{price}</span>
    </div>
    
    </div>
    </Link>
  )
}

export default NewArrivalCard
