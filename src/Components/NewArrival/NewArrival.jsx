import React, { useEffect, useState } from 'react'
import './NewArrival.css'
import my_products from '../Assets/my_products';
import NewArrivalList from './NewArrivalList';

const NewArrival = () => {

    const [newArrival, setNewArrival] = useState(my_products);

    useEffect(() =>{
      const filteredNew = my_products.filter(item => item.new === 'arrival')
      
       setNewArrival(filteredNew);
    }, [])

  return (
    <div>
      <div className='new-arrival'>
      <h2>Our New Arrivals</h2>
      </div>
      
      <hr className='new-break' />

      <NewArrivalList newArrival={newArrival} />
  
    </div>
  )
}

export default NewArrival
