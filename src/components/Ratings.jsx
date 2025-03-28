import React from 'react';

const Ratings = () => {
  return (
    <div className='d-flex flex-row align-items-start justify-content-between gap-3 w-100'>
      {/* Product Rating Section */}
      <div className='d-flex flex-column align-items-start justify-content-start gap-2'>
        <h5>Product Rating</h5>
        <div className='text-warning d-flex gap-2 fs-5'>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star-half-stroke"></i>
        </div>
        <span><strong>4.5 out of 5</strong> (69 Reviews)</span>
      </div>

      {/* Ratings Breakdown with Progress Bars */}
      <div className='d-flex flex-column align-items-start justify-content-start gap-2'>
        {[
          { star: 5, count: 3 },
          { star: 4, count: 2 },
          { star: 3, count: 1 },
          { star: 2, count: 0 },
          { star: 1, count: 0 },
        ].map((rating) => (
          <div key={rating.star} className='d-flex align-items-center my-1 gap-2'>
            <span className='text-decoration-underline'>{rating.star} stars</span>
            <div className='progress mx-2' style={{ width: "600px", height: "15px" }}>
              <div 
                className='progress-bar progress-bar-striped progress-bar-animated bg-primary rounded-4' 
                role='progressbar' 
                style={{ width: `${rating.count * 20}%` }}>
              </div>
            </div>
            <span>({rating.count})</span>
          </div>
        ))}
      </div>

      {/* Review Button */}
      <div className='d-flex flex-column align-items-start gap-2'>
        <p>Let us know your thoughts!</p>
        <button className='btn btn-primary'>
          <i className="fa-solid fa-pen-to-square"></i> Write a Review
        </button>
      </div>
    </div>
  );
};

export default Ratings;
