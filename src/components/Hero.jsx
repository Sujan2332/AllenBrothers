import React from 'react'
import ProductImg from './ProductImg'
import ProductDescription from './ProductDescription'

const Hero = () => {
  return (
    <div className='d-flex flex-row justify-content-between gap-5 pb-5'>
        <ProductImg/>
        <ProductDescription/>
    </div>
  )
}

export default Hero
