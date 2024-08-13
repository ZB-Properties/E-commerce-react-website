import React from 'react'
import './Color.css'
import Input from '../Components/Input'


const Color = ({handleChange}) => {
  return (
     
     <div className='color'>
    <h3 className='sidebar-title color-title'>Colors</h3>
    
    <label className='sidebar-label-container'>
        <input onChange={handleChange} type='radio' value='' name='test2' />
        <span className='checkmark all '></span> All
      </label>

      <Input 
        handleChange={handleChange}
        value="black"
        title="Black"
        name="test2"
        color="black"
      />
      <Input 
        handleChange={handleChange}
        value="blue"
        title="Blue"
        name="test2"
        color="blue"
      />
      <Input 
        handleChange={handleChange}
        value="gold"
        title="Gold"
        name="test2"
        color="gold"
      />
      <Input 
        handleChange={handleChange}
        value="pink"
        title="Pink"
        name="test2"
        color="pink"
      />
      <Input 
        handleChange={handleChange}
        value="red"
        title="Red"
        name="test2"
        color="red"
      />
      
  <label className='sidebar-label-container'>
   <input type='radio' onChange={handleChange} value='white' name='test2'/>
   <span className='checkmark' 
   style={{background: "white", border: "2px solid black"}}></span> White
  </label>

      </div>
  
  )
}

export default Color
