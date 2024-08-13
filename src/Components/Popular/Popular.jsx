import React, { useEffect, useState } from 'react'
import my_products from '../Assets/my_products'
import PopularList from './PopularList';
import './Popular.css'


const Popular = () => {

  const [data, setData] = useState(my_products);

  useEffect(() =>{
    const filteredData = my_products.filter(item => item.categories === 'special')
    
     setData(filteredData);
  }, [])

  return (
    <div>
    <div className='popular'>
         <h2>Trending Products</h2>

       </div>

       <hr className='popular-break' />

      <PopularList data={data} />
    </div>
  )
}

export default Popular
