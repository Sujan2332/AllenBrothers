import React from 'react'
import logo from "../assets/Allen-Brothers-Logo.png"
import "../styles/Searchbar.css"
const Searchbar = () => {
  return (
    <div className='d-flex flex-row justify-content-evenly align-items-center gap-3 bg-primary searchbar p-3 px-4 text-white'>
      <img src={logo} width="300px" alt="" />
      <input type="text" className='form-control w-50' placeholder="I'm shopping for..."/>
      <section><i class="fa-solid fa-phone"></i> 1-800-957-0111</section>
      <section><i class="fa-regular fa-circle-user"></i> Sign in</section>
      <section><i class="fa-solid fa-cart-shopping"></i> My Cart</section>
    </div>
  )
}

export default Searchbar
