import React from "react";
import logo from "../assets/Allen-Brothers-Logo.png";
import "../styles/Searchbar.css";

const Searchbar = () => {
  return (
    <div className="d-flex flex-row justify-content-between align-items-center gap-3 bg-primary searchbar py-3 px-5 text-white">
      {/* Logo */}
      <img src={logo} width="200px" alt="Allen Brothers Logo" className="logo" />

      {/* Search Input with Icon */}
      <div className="search-container">
        <input type="text" className="form-control search-input" placeholder="I'm shopping for..." />
        <i className="fa-solid fa-magnifying-glass search-icon"></i>
      </div>

      {/* Contact, Sign-In & Cart */}
      <div className="d-flex flex-row justify-content-center align-items-center gap-3 p-0 m-0">
        <p><i className="fa-solid fa-phone"></i> 1-800-957-0111</p>
        <p><i className="fa-regular fa-circle-user"></i> Sign in</p>
        <p><i className="fa-solid fa-cart-shopping"></i> My Cart</p>
      </div>
    </div>
  );
};

export default Searchbar;
