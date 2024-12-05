import React from 'react'
import logo from '../../assets/rocketlogo.svg'

const Navbar = () => {
  return (
    <div className='navbar'> 
        <img src={logo} width="130px"  height="100px" alt="logo" />
        <ul>
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <button>Get Started</button>
    </div>
  )
}

export default  Navbar