import React from 'react'
import './Recommended.css'
import ShopButton from './ShopButton'


const Recommended = ({handleClick}) => {

  return (
    <div>
      <div className='recommend-title'>
      <h2>Recommended</h2>
      </div>
      <div className='recommend-flex'>
        <ShopButton onClickHandler={handleClick} value="" title="All Products" />
        <ShopButton onClickHandler={handleClick} value="Designer Perfumes" title="Designer Perfumes" />
        <ShopButton onClickHandler={handleClick} value="Lattafa" title="Lattafa" />
        <ShopButton onClickHandler={handleClick} value="Aromatherapy" title="Aromatherapy" />
        <ShopButton onClickHandler={handleClick} value="Arabian Oils" title="Arabian Oils" />
      </div>
    </div>
  )
}

export default Recommended
