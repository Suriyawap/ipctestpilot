/* eslint-disable no-unused-vars */

import React, { useState } from 'react'
import logo from './assets/logo.png'
import coursepng from './assets/training-elearning-course-online-learning-computer-education-svgrepo-com.svg'
import trainerpng from './assets/undraw_teaching_re_g7e3.svg'
import studentpng from './assets/undraw_designer_re_5v95.svg'
import { Link } from 'react-router-dom'
import Modal from './Modal'



const Homepage = () => {

  let [iscourseOpen, setiscourseOpen] = useState(false);
  let [istrainerOpen, setistrainerOpen] = useState(false);
  let [isstudentOpen, setisstudentOpen] = useState(false);
  return (
    <div className='h-screen'>
        <header>
          <nav className='flex border p-1'>
            <ul className='flex gap-5 justify-center'>
              <li><img src={logo} alt="img" className='w-20' /></li>
              
            </ul>
          </nav>
        </header>
        <main className='flex h-5/6 justify-center items-center border gap-14'>
          <div className='w-1/4 flex flex-col justify-center items-center gap-10'>
          <img src={coursepng} alt="png" />
          <button className='border p-2 bg-orange-200 rounded  hover:bg-orange-400 hover:no-underline hover:text-white'  onClick={() => setiscourseOpen(true)} >COURSE</button>
          <Modal isOpen={iscourseOpen} onClose={() => setiscourseOpen(false)} >
            <div className='flex flex-col gap-4 justify-center items-center'>
            <h2 className="text-xl font-bold">COURSE FUNCTIONS</h2>
            <Link to="/createcourse" className=' border p-2 bg-orange-200 rounded  hover:bg-orange-400 hover:no-underline hover:text-white w-auto '>CREATE COURSE</Link>
            <Link to="/viewcourse" className=' border p-2 bg-orange-200 rounded  hover:bg-orange-400 hover:no-underline hover:text-white w-auto '>VIEW COURSES</Link>
            <Link to="/createcourse" className=' border p-2 bg-orange-200 rounded  hover:bg-orange-400 hover:no-underline hover:text-white w-auto '>DELETE COURSE</Link>
            </div>
          </Modal>
          </div>
          
          <div className='w-1/3 flex flex-col justify-center items-center  gap-10'>
          <img src={trainerpng} alt="png"  />
        <button className=' border p-2 bg-orange-200 rounded  hover:bg-orange-400 hover:no-underline hover:text-white'  onClick={() => setistrainerOpen(true)}>TRAINER</button>
        <Modal isOpen={istrainerOpen} onClose={() => setistrainerOpen(false)} >
            <div className='flex flex-col gap-4 justify-center items-center'>
            <h2 className="text-xl font-bold">TRAINER FUNCTIONS</h2>
            <Link to="/createcourse" className=' border p-2  bg-orange-200 rounded  hover:bg-orange-400 hover:no-underline hover:text-white w-auto '>ADD TRAINER</Link>
            <Link to="/createcourse" className=' border p-2 bg-orange-200 rounded  hover:bg-orange-400 hover:no-underline hover:text-white w-auto '>UPDATE TRAINER</Link>
            <Link to="/createcourse" className=' border p-2 bg-orange-200 rounded  hover:bg-orange-400 hover:no-underline hover:text-white w-auto '>DELETE TRAINER</Link>
            </div>
          </Modal>
          </div>


         <div className='w-1/4 flex flex-col justify-center items-center  gap-10'>
         <img src={studentpng} alt="png"  />
        <button className='border p-2 bg-orange-200 rounded  hover:bg-orange-400 hover:no-underline hover:text-white '  onClick={() => setisstudentOpen(true)}>STUDENT</button>
        <Modal isOpen={isstudentOpen} onClose={() => setisstudentOpen(false)} >
            <div className='flex flex-col gap-4 justify-center items-center'>
            <h2 className="text-xl font-bold">STUDENT FUNCTIONS</h2>
            <Link to="/createcourse" className=' border p-2 w-auto bg-orange-200 rounded  hover:bg-orange-400 hover:no-underline hover:text-white w-1/3 '>ADD STUDENT</Link>
            <Link to="/createcourse" className=' border p-2 w-auto bg-orange-200 rounded  hover:bg-orange-400 hover:no-underline hover:text-white w-1/3 '>UPDATE STUDENT</Link>
            <Link to="/createcourse" className=' border p-2 bg-orange-200 rounded w-auto  hover:bg-orange-400 hover:no-underline hover:text-white w-1/3 '>DELETE STUDENT</Link>
            </div>
          </Modal>
         </div>
        </main>
    </div>
  )
}

export default Homepage