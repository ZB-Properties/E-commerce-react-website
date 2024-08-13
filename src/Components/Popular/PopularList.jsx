import React from 'react'
import PopularCard from './PopularCard'
import './PopularCard.css'


const PopularList = ({data}) => {
  return (
    <>
     <section className='popular-container'>
       {
        data.map((item) =>(
            <PopularCard item={item} />
        ))
       }
       </section>
    </>
  )
}

export default PopularList
