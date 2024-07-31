/* eslint-disable no-unused-vars */
import React from 'react'
import logo from './assets/logo.png'
import { Link } from 'react-router-dom'



const Homepage = () => {
  return (
    <div>
        <header>
          <nav className='flex border p-1'>
            <ul className='flex gap-5'>
              <li><img src={logo} alt="img" className='w-20' /></li>
              <li className='leading-10'> <Link to="/createcourse" className='  border p-2 bg-orange-200 rounded  hover:bg-orange-400 hover:no-underline hover:text-white  '>CREATECOURSE</Link></li>
            </ul>
          </nav>
        </header>
    </div>
  )
}

export default Homepage