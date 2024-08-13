import React from 'react'
import Slider from '../Components/Slider/Slider'
import Services from '../Components/Services/Services'
import Popular from '../Components/Popular/Popular'
import Deal from '../Components/Deals/Deal'
import NewArrival from '../Components/NewArrival/NewArrival'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import Footer from '../Components/Footer/Footer'



const Home = () => {
  return (
    <div>
      <Slider/>
      <Services />
      <Popular />
      <Deal/>
      <NewArrival />
      <NewsLetter/>
      <Footer />
    </div>
  )
}

export default Home
