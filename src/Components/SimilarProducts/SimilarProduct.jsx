import React, { useEffect, useState } from 'react'
import my_products from '../Assets/my_products'
import SimilarProductList from './SimilarProductList'


const SimilarProduct = () => {

    const [similarProducts, setSimilarProducts] = useState(my_products)

    useEffect(() =>{
        const filteredSimilar = my_products.filter(item => item.similar === 'extra')

        setSimilarProducts(filteredSimilar)

    }, [])


  return (
    <div>
      <SimilarProductList similarProducts={similarProducts}  />
    </div>
  )
}

export default SimilarProduct
