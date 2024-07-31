/* eslint-disable no-unused-vars */
import React from 'react'
import logo from './assets/logo.png'
import student from './assets/undraw_learning_sketching_nd4f.svg'
import user from './assets/undraw_professor_re_mj1s.svg'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='h-screen '>
        <header className='flex border  justify-between p-2 '>
         
            <img src={logo} alt="img" className='w-20' />
            <p className='text-violet-300'>IPCTESTPILOT</p>
        </header>
        <main className=''>
            <div className='flex justify-around my-16 '>
              <div className='flex justify-center items-center  flex-col gap-4'> 
                <img src={user} alt="" className='w-3/5 '/>
                <button className='py-2 px-4 rounded bg-orange-300 hover:bg-orange-400'> <Link to="/login">User</Link></button>
            </div>
            <div className='flex justify-center items-center  flex-col gap-4'>
                <img src={student} alt="" className='w-1/2'/>
                <button className='py-2 px-4 rounded bg-orange-300 hover:bg-orange-400'>
                <Link to="/login">Student</Link></button>
            </div>
            </div>
        </main>
        <footer className='flex justify-center items-center border bg-orange-200 pb-5'>
            <div className='flex flex-col gap-1 items-center justify-center'>
                <p>Footer About To Come</p>
                <p>@Qspiders</p>
            </div>
        </footer>
    </div>
  )
}

export default Home