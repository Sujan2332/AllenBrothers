import React from 'react'
import CookingInstructions from './CookingInstructions'

const Description = () => {
  return (
    <div className='d-flex flex-row justify-content-between align-items-start gap-5 py-5'>
      <CookingInstructions/>
      <img src="" width="500px" height="500px" className='rounded-3'></img>
    </div>
  )
}

export default Description
