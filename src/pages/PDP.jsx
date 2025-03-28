import React from 'react'
import Searchbar from '../components/Searchbar'
import Categories from '../components/Categories'
import Navigator from '../components/Navigator'
import "../styles/PDP.css"
import Hero from '../components/Hero'
import Description from '../components/Description'
import SimilarProducts from '../components/SimilarProducts'
import CustomerReviews from '../components/CustomerReviews'
import Footer from '../components/Footer'
import FooterLast from '../components/FooterLast'

const PDP = () => {
  return (
    <div>
      <Searchbar/>
      <Categories/>
      <div className='main border-bottom'>
        <Navigator/>
        <Hero/>
      </div>
      <div className='main border-bottom'>
        <Description/>
      </div>
      <div className='main border-bottom'>
        <SimilarProducts/>
      </div>
      <div className='main border-bottom'>
        <CustomerReviews/>
      </div>
      <div className='main'>
        <Footer/>
      </div>
      <div>
        <FooterLast/>
      </div>
    </div>
  )
}

export default PDP
