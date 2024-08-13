import React from 'react'
import './Price.css'
import Input from '../Components/Input'


const Price = ({handleChange}) => {

  return (
    <div  className='price'>
    <h3 className='sidebar-title price-title'>Price</h3>
    
    
   <label className='sidebar-label-container'>
        <input onChange={handleChange} type='radio' value='' name='test1' />
        <span className='checkmark'></span> All
      </label>

      <Input
     value= {45}
     handleChange={handleChange}
     title="#0-50"
     name="test1"
      />
     <Input
     value= {100}
     handleChange={handleChange}
     title="#50-150"
     name="test1"
     />
       <Input
     value= {250}
     handleChange={handleChange}
     title="#150-300"
     name="test1"
      />
       <Input 
     value= {450}
     handleChange={handleChange}
     title="Over 300"
     name="test1"
      />
    </div>
  )
}

export default Price
