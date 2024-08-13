import React from 'react'
import './Variety.css'
import Input from '../Components/Input'


const Variety = ({handleChange}) => {

  return (
    <div className='variety'>
     <h3 className='sidebar-title'>Variety</h3>
   
    <div>
    <label className='sidebar-label-container'>
        <input onChange={handleChange} type='radio' value='' name='test' />
        <span className='checkmark '></span> All
      </label>

      <Input 
     handleChange={handleChange}
     value="Male Perfumes"
     title="Male Perfumes"
     name="test"
      />
      <Input
     handleChange={handleChange}
     value="Female Perfumes"
     title="Female Perfumes"
     name="test"
    />
	 <Input
     handleChange={handleChange}
     value="Diffusers"
     title="Diffusers"
     name="test"
    />
    <Input
     handleChange={handleChange}
     value="Perfume Oils"
     title="Perfume Oils"
     name="test"
    />
    </div>

    </div>
  );
}

export default Variety
