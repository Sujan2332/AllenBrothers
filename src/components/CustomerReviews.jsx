import React from 'react'
import Ratings from './Ratings'
import ReviewFilter from './ReviewFilter'
import ReviewList from './Reviews'

const CustomerReviews = () => {
  return (
    <div className='d-flex flex-column align-items-start justify-content-center gap-3 w-100 py-5'>
      <h3>Customer Reviews</h3>
      <Ratings/>
      <ReviewFilter/>
      <ReviewList/>
    </div>
  )
}

export default CustomerReviews
