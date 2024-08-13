import React from 'react'
import NewArrivalCard from './NewArrivalCard'
import './NewArrivalCard.css'


const NewArrivalList = ({newArrival}) => {

  return (
    <>
    <section className='new-container'>
       {
        newArrival.map((item) =>(
           <NewArrivalCard item={item} />
        ))
       }
       </section>
      
    </>
  )
}

export default NewArrivalList
