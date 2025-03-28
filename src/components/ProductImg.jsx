import React from 'react'

const ProductImg = () => {
    return (
        <div className='d-flex flex-row justify-content-center align-items-start gap-5'>
            <div className='d-flex flex-column gap-3 justify-content-start align-items-center gap-3'>
                <img src="" alt="" width="80px" height="80px" className='rounded-1' />
                <img src="" alt="" width="80px" height="80px" className='rounded-1' />
                <video src="" width="80px" height="80px" className='rounded-1'></video>
            </div>
            <div className='d-flex flex-column gap-3 justify-content-center align-items-start '>
                <div className='d-flex flex-column gap-3 justify-content-center aling-items-center'>
                    <img src="" alt="" width="500px" height="532px" className='rounded-2' />
                    <div className="d-flex flex-row justify-content-center align-items-center gap-3 border bg-light py-2 rounded-1">
                        Best For:
                        <i className="fa-solid fa-burger border p-2 bg-white rounded-1"></i>
                        <span className='fw-medium'>Grilling</span>
                        <i className="fa-solid fa-kitchen-set border p-2 bg-white rounded-1"></i>
                        <span className='fw-medium'>On the Skillet</span>
                    </div>
                </div>
                {/* Key Highlights Section */}
                <div className="w-100 d-flex justify-content-center">
                    <div className="w-100" style={{ maxWidth: '500px' }}>
                        <h5 className='text-primary'>Key Highlights</h5>
                        <ul className='list-unstyled'>
                            <li className="d-flex align-items-start gap-2">
                                <i className="fa-regular fa-circle-check text-success mt-1"></i>
                                <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut temporibus molestias nesciunt.</span>
                            </li>
                            <li className="d-flex align-items-start gap-2">
                                <i className="fa-regular fa-circle-check text-success mt-1"></i>
                                <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut temporibus molestias nesci.</span>
                            </li>
                            <li className="d-flex align-items-start gap-2">
                                <i className="fa-regular fa-circle-check text-success mt-1"></i>
                                <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut temporibus molestias nesciunt.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductImg
