/* eslint-disable no-unused-vars */

import React, { useState } from 'react'
import logo from './assets/logo.png'
import coursepng from './assets/training-elearning-course-online-learning-computer-education-svgrepo-com.svg'
import trainerpng from './assets/woman-with-pointing-stick-svgrepo-com.svg'
import studentpng from './assets/male-student-studying-svgrepo-com.svg'
import { Link } from 'react-router-dom'
import Modal from './Modal'



const Homepage = () => {

  let [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className='h-screen'>
        <header>
          <nav className='flex border p-1'>
            <ul className='flex gap-5 justify-center'>
              <li><img src={logo} alt="img" className='w-20' /></li>
              <li className='leading-10 my-2 '> <Link to="/createcourse" className=' border p-2 bg-orange-200 rounded  hover:bg-orange-400 hover:no-underline hover:text-white  '>CREATECOURSE</Link></li>
            </ul>
          </nav>
        </header>
        <main className='flex h-5/6 justify-center items-center border gap-20'>
          <div className='w-1/4 flex flex-col justify-center items-center gap-10'>
          <img src={coursepng} alt="png" />
          <button className='border p-2 bg-orange-200 rounded  hover:bg-orange-400 hover:no-underline hover:text-white'  onClick={() => setIsModalOpen(true)} >COURSE</button>
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} >
            <div className='flex flex-col gap-4 justify-center items-center'>
            <h2 className="text-xl font-bold">COURSE FUNCTIONS</h2>
            <Link to="/createcourse" className=' border p-2 bg-orange-200 rounded  hover:bg-orange-400 hover:no-underline hover:text-white w-1/3 '>CREATECOURSE</Link>
            <Link to="/createcourse" className=' border p-2 bg-orange-200 rounded  hover:bg-orange-400 hover:no-underline hover:text-white w-1/3 '>CREATECOURSE</Link>
            <Link to="/createcourse" className=' border p-2 bg-orange-200 rounded  hover:bg-orange-400 hover:no-underline hover:text-white w-1/3 '>CREATECOURSE</Link>
            </div>
          </Modal>
          </div>
          
          <div className='w-1/4 flex flex-col justify-center items-center  gap-10'>
          <img src={trainerpng} alt="png"  />
          <Link to="/createcourse" className=' border p-2 bg-orange-200 rounded  hover:bg-orange-400 hover:no-underline hover:text-white  '>TRAINER</Link>
          </div>
         <div className='w-1/4 flex flex-col justify-center items-center  gap-10'>
         <img src={studentpng} alt="png"  />
         <Link to="/createcourse" className=' border p-2 bg-orange-200 rounded  hover:bg-orange-400 hover:no-underline hover:text-white  '>STUDENT</Link>
         </div>
        </main>
    </div>
  )
}

export default Homepage