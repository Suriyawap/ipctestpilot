/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import logo from './assets/undraw_sign_up_n6im.svg'
import { Link } from 'react-router-dom'
import axios from 'axios'
import{Toaster} from '@blueprintjs/core'

let apptoaster=Toaster.create(
    {
        position:"top"
    }
)
const Signup = () => {

  let[data,setdata]=useState({userName:"",userEmail:"",userPassword:"",userContact:0,userRole:1});

  function handlechange(e){
    let{name,value}=e.target
    setdata((prevdata)=>({
      ...prevdata,
      [name]:value
    }));
  }

  function handlesubmit(){
     axios.post('http://localhost:8080/users',data)
     .then((data)=>{
      apptoaster.show({
        message:"User Added Sucessfully",
        intent:"success",
        timeout:2000
     })
     })
     
  }

  return (

    <div className='h-screen '>
    <div className='flex justify-around items-center border '>
    <div className=' w-2/5 my-16' >
        <img src={logo} alt="signuppng" className=''/>
    </div>
        <div className='w-1/3 my-16'>
        <form  className='flex flex-col  gap-4 border p-10' onSubmit={handlesubmit}>
            <h2 className='text-center text-3xl'>SIGNUP</h2>

            <label htmlFor="">USERNAME:</label>
            <input type="text" name="userName" value={data.userName}  onChange={handlechange} className='border p-2 border-slate-800 focus:border-slate-50' />

            <label htmlFor="">EMAIL:</label>
            <input type="email" name="userEmail" value={data.userEmail} onChange={handlechange} className='border p-2 border-slate-800 focus:border-slate-50' />

            <label htmlFor="">PASSWORD:</label>
            <input type="password" name="userPassword" value={data.userPassword} onChange={handlechange} className='border p-2 border-slate-800 focus:border-slate-50 '/>

            <label htmlFor="">CONTACT:</label>
            <input type="tel" name="userContact" value={data.userContact} onChange={handlechange} className='border p-2 border-slate-800 mb-4 focus:border-slate-50' />

            <button type='submit' className='border p-2 border-slate-800 mb-4'>SUBMIT</button>
            <p>Already Have Account ? <Link to="/login" className='border bg-orange-300 py-2 px-4 rounded hover:bg-orange-400 hover:no-underline hover:text-white'>LOGIN</Link></p>
        </form>
        </div>
    </div>
   </div>
  )
}

export default Signup