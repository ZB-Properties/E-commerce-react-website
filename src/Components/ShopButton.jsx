import React from 'react'

const ShopButton = ({onClickHandler, value, title}) => {
  return (
    <div>

    <button onClick={onClickHandler} value={value} className='btn'>
        {title}
    </button>
          
    </div>
  )
}

export default ShopButton
