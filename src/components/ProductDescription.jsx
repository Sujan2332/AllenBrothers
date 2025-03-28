import React from 'react'
import AddToCart from './AddToCart'
import BuySaveMore from './BuySaveMore'
import Benfits from './Benfits'

const ProductDescription = () => {
    return (
        <div className='d-flex flex-column gap-4 justify-content-start align-items-start'>
            <div className='d-flex flex-column gap-0 justify-content-start align-items-start'>
            <span className="bg-danger px-3 rounded-5 text-white fw-medium">SALE</span>
            <h2>Allen Brothers Angus Filet Mignon</h2>
            <div className='d-flex flex-row gap-2 align-items-center justify-content-start'>
                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i> 69 Reviews
            </div>
            <div className='d-flex flex-row gap-3 align-items-start justify-content-center'>
                <span className='border-end pe-3'>2 steaks per pack</span> 
                <span>Item Code: #99085</span>
            </div>
            <div className='d-flex flex-column gap-1 align-items-start justify-content-center py-3'>
                <h5 className='fw-medium'>Weight</h5>
                <div className='d-flex flex-row gap-4 align-items-start justify-content-center'>
                    <span className='text-center border px-2 py-2 rounded-3'><strong>6 oz.</strong> <br /> Approx. 1.5" Thick</span>
                    <span className='text-center border px-2 py-2 rounded-3'><strong>8 oz.</strong><br /> Approx. 2" Thick</span>
                    <span className='text-center border px-2 py-2 rounded-3'><strong>8 oz.</strong><br /> Approx. 2" Thick</span>
                </div>
            </div>
            <div className='text-danger fs-5 d-flex flex-row align-items-center gap-2 justify-content-start'>
               <strong>$64.94</strong>  <span className='text-muted' style={{ textDecoration: 'line-through' }}>$99.95</span> <span className='fw-medium' style={{fontSize:"16px"}}>Save $30.00 (30%)</span>
            </div>
            </div>
            <AddToCart/>
            <BuySaveMore/>
            <Benfits/>
        </div>
    )
}
export default ProductDescription
