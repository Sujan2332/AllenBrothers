import React from 'react'

const AddToCart = () => {
  return (
    <div className='d-flex flex-row align-items-start justify-content-center gap-3 w-100'>
      <div className='d-flex flex-row align-items-center justify-content-center'>
        <button className='px-3 py-2 btn border rounded-1 fs-5'>-</button>
        <button className='px-3 py-2 btn border rounded-1 fs-5'>1</button>
        <button className='px-3 py-2 btn border rounded-1 fs-5'>+</button>
      </div>
      <button className='py-2 btn rounded-1 bg-primary text-white w-100 fs-5'>Add To Cart</button>
    </div>
  )
}

export default AddToCart
