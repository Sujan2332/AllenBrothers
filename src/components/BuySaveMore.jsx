import React from 'react';

const BuySaveMore = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center w-100 text-center border rounded-4 overflow-hidden">
      {/* Header Section */}
      <div className="border-bottom w-100 bg-light rounded-top-4 px-3 py-2">
        <h5 className="m-0">Buy More & Save More! <i className="fa-solid fa-tag"></i></h5>
        <p className="m-0 text-muted">Save more with our volume pricing discounts</p>
      </div>

      {/* Pricing Section */}
      <div className="d-flex flex-column gap-2 align-items-center justify-content-center py-3 w-100">
        {[
          { pack: "1 pack", steaks: "Includes 2 steaks" },
          { pack: "2 pack", steaks: "Includes 4 steaks" },
          { pack: "3 pack", steaks: "Includes 6 steaks" },
          { pack: "4 pack", steaks: "Includes 8 steaks" }
        ].map((item, index) => (
          <div key={index} className="d-flex justify-content-center align-items-center gap-3">
            <strong>{item.pack}</strong>
            <span className="text-muted">{item.steaks}</span>
            <strong className="text-danger">$XX.XX</strong>
            <span className="fst-italic text-muted">Save 10%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuySaveMore;
