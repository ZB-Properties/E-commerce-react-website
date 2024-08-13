import React, { useState } from 'react'
import './CSS/Shop.css'
import SideBar from '../Sidebar/SideBar'
import { AiOutlineSearch } from "react-icons/ai"
import Recommended from '../Components/Recommended'
import Commodities from '../Commodity/Commodities'

import Card from '../Components/Card'
import my_products from '../Components/Assets/my_products'


const Shop = () => {

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [item, setItem] = useState("")

  const handleChange = (event) => {
    setSelectedCategory(event.target.value)
   };

 const handleClick = (event) => {
 setSelectedCategory(event.target.value)
};

const handleInputChange = (event) => {
  setItem(event.target.value)
};

const filteredItems = my_products.filter((product) => product.title.toLowerCase().includes(item.toLowerCase()))

function filteredData(my_products,selected,item) {
  let filteredProducts = my_products
  
  if(item) {
    filteredProducts = filteredItems
    }

   if(selected) {
   filteredProducts = filteredProducts.filter(({category, color, company, price, title}) =>
   category === selected ||
   color === selected ||
   company === selected ||
   price === selected ||
   title === selected
   );
 }
 
 return filteredProducts.map(({id, imgURL3, title, category, reviews, price, note}, i ) => (
  <Card key={i}
  id={id}
  imgURL3={imgURL3}
  title={title}
  category={category}
  reviews={reviews}
  price={price}
  note={note}
  />
 ))
 }
 
 const result = filteredData(my_products, selectedCategory, item)

   return (
    <div className='shop-container'>

  <SideBar handleChange={handleChange}/> 
  
  <nav>
   <div className='search-container'>
  <input type='text' className='search-input' placeholder='Enter your perfume...'
       name='search'  onChange={handleInputChange}/>   
       <AiOutlineSearch className='search-icon'/>
    </div>
    </nav>
 

     <Recommended handleClick={handleClick} />

        <Commodities result={result} />
        
    </div>
  )
}

export default Shop