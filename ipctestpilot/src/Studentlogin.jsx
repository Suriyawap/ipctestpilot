/* eslint-disable no-unused-vars */
import { Toaster } from '@blueprintjs/core'
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from './assets/undraw_login_re_4vu2.svg'

let apptoaster=Toaster.create(
    {
        position:"top"
    }
)


const Studentlogin = () => {
    let[email,setemail]=useState("")
    let[password,setpassword]=useState("")
    let his=useNavigate()
   console.log("render")
    function handlesubmit(e){
        e.preventDefault()
        console.log(email)
        axios.get(`http://localhost:8080/student/login?email=${email}&password=${password}`)
        .then((res)=>{
             apptoaster.show({
                message:"Login Sucessfully",
                intent:"success",
                timeout:2000
             })
             his('/homepage')
        }).catch((e)=>{
            alert(e)
        })
    }
    
  return (
    <div className='h-screen  flex'>
        <div className='flex justify-around items-center border '>
        <div className='border w-1/2 my-16' >
            <img src={logo} alt="loginpng" className=''/>
        </div>
            <div className='w-1/3 my-16'>
            <form onSubmit={handlesubmit}  className='flex flex-col  gap-4 border p-10'>
                <h2 className='text-center text-3xl'>LOGIN</h2>
                <label htmlFor="">EMAIL:</label>
                <input type="email" name="email" className='border p-2 border-slate-800 focus:border-slate-50'onChange={(e)=>{setemail(e.target.value)}} />

                <label htmlFor="">PASSWORD:</label>
                <input type="password" name="" className='border p-2 border-slate-800 mb-4 focus:border-slate-50' onChange={(e)=>{setpassword(e.target.value)}}/>

                <button type="submit" className='border p-2 border-slate-800 mb-4'>SUBMIT</button>
                <p>If You Dont Have Account ? <Link to="/studentsignup" className='border bg-orange-300 py-2 px-4 rounded hover:bg-orange-400 hover:no-underline hover:text-white '>SIGNUP</Link></p>
            </form>
            </div>
        </div>
       </div>
  )
}

export default Studentlogin