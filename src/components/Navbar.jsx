import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='Navbar'>
      <Link to={'/'}><h2 className='title'>e-commerce</h2></Link>
      <span>
        <Link to={'/logged'} ><i className='bx bx-user pages'></i></Link>
        <Link to={'/purchases'}><i className='bx bxs-store-alt pages' ></i></Link>
        <Link to={'/cart'}><i className='bx bxs-cart-alt pages'></i></Link>
      </span>
    </div>
  )
}

export default Navbar