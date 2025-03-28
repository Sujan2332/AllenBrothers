import React from "react";

const ReviewFilter = () => {
  return (
    <div className="mt-4 w-100 d-flex flex-row align-items-start justify-content-start gap-5">
      <div className="d-flex flex-row align-items-center justify-content-start gap-2">
        <strong className="w-100">Filter by</strong>
        <select className="form-select w-100 w-auto" style={{minWidth:"180px"}}>
          <option>All Reviews</option>
          <option>Verified Buyers</option>
          <option>With Photos</option>
        </select>
      </div>
      <div className="d-flex flex-row align-items-center justify-content-start gap-2">
        <strong className="w-100">Sort by</strong>
        <select className="form-select w-100 w-auto" style={{minWidth:"180px"}}>
          <option>Most Recent</option>
          <option>Highest Rating</option>
          <option>Lowest Rating</option>
        </select>
      </div>
    </div>
  );
};

export default ReviewFilter;
