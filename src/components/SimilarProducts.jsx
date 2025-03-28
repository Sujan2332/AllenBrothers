import React from 'react'
import { similarProducts } from '../assets/data'
const SimilarProducts = () => {
  return (
    <div className='py-5 d-flex flex-column gap-4'>
        <h3>Similar Products You Might Like</h3>
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 '>
            {similarProducts.map((product)=>(
                <div className='col ' key={product.id}>
                    <div className='card h-100 shadow-sm'>
                    <img src={product.image} alt="" className='card-img-top' width="200px" height="280px"/> 
                    <div className='card-body d-flex flex-column'>
                    <h5 className='card-title'>{product.name}</h5>
                    <p className='card-text'>
                        Starting from <span className='text-primary'>{product.price}</span>
                    </p>
                    <a href="/" className='btn btn-primary w-100 mt-auto'>View Options</a>
                    </div>   
                    </div>
                </div>
            ))}
        </div>
      
    </div>
  )
}

export default SimilarProducts
