import React from 'react'

const Categories = () => {
    return (
        <div className='d-flex flex-row justify-content-center gap-4 align-items-center py-2 border-bottom border-2'>
            <div className='d-flex flex-row justify-content-center gap-4 align-items-center border-end border-2 pt-2 pe-5'>
                <p className='fw-medium'>Beef</p>
                <p className='fw-medium'>Lamb</p>
                <p className='fw-medium'>Pork</p>
                <p className='fw-medium'>Seafood</p>
                <p className='fw-medium'>Poultry</p>
                <p className='fw-medium'>Veal</p>
                <p className='fw-medium'>Game</p>
            </div>
            <div className='d-flex flex-row justify-content-center gap-4 align-items-center ps-4 pt-2'>
                <p className='fw-medium'>Gift Center</p>
                <p className='fw-medium'>Bundles</p>
                <p className='fw-medium text-danger'>Deals!</p>
            </div>
        </div>
    )
}

export default Categories
