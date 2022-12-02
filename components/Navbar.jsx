import React from 'react';
import Link from 'next/link';

import {GiCarWheel} from 'react-icons/gi'
// import { useStateContext } from '../context/StateContext';
 
const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='nav-item logo'>
        <GiCarWheel/>
      </div>
      <ul className='navi-items'>
        <li className='item'><a href='/'>Home</a></li>
        <li className='item'><a href='/services'>Services</a></li>
        <li className='item'><a href=''>About</a></li>
        <li className='item'><a href=''>Contact us</a></li>
        <li className='item'><a href=''>Login</a></li>
      </ul>
    </div>
  )
}

export default Navbar
