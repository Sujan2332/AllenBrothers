import React from 'react'
import { OrderInfoSection } from '../assets/data'  // Ensure correct import

const Benfits = () => {
  return (
    <div className="order-info-section">
      {OrderInfoSection?.infoItems?.map((item, index) => ( 
        <div key={index} className="d-flex align-items-start gap-3 mb-3">
          <i className={`fa-solid ${item.icon} fs-4 pt-2`}></i>
          <div>
            <strong className="m-0 fw-medium">{item.title}</strong>
            <p className="text-muted m-0">{item.description} <a href={item.linkUrl} className='text-primary'>{item.linkText}</a></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Benfits;
