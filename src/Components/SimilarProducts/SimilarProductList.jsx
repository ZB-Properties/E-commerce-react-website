import React from 'react'
import SimilarProductCard from './SimilarProductCard'
import './SimilarProduct.css'


const SimilarProductList = ({similarProducts}) => {
  return (
    <>
      
      <section className='similar-container'>
       {
        similarProducts.map((item) =>(
           <SimilarProductCard item={item} />
        ))
       }
       </section>
    </>
  )
}

export default SimilarProductList
