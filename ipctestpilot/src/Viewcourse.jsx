/* eslint-disable no-unused-vars */

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from './assets/logo.png'
import Updatecourse from './Updatecourse'
import { Toast2, Toaster } from '@blueprintjs/core';

let appt=Toaster.create(
  {
    position:'top'
  }
 )

const Viewcourse = () => {



  let navi=useNavigate();
    let [dat,setdata]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:8080/course/getall")
               .then(res=>setdata(res.data.data))
               .catch(error => {
                console.log('There was an error!', error);
              })
            //    .then((resp)=>setdata(resp))
               
    },[])

    function handledelete(id){
      axios.delete(`http://localhost:8080/course/${id}`)
      .then((res)=>{
        axios.get("http://localhost:8080/course/getall")
               .then(res=>setdata(res.data.data))
               .then(()=>{
                appt.show({
                  message:"Course Deleted Sucessfully",
                  intent:"danger",
                  timeout:2000
               })
               })
      })
      
    }
  
  console.log(dat)
 
  return (
    <div className='h-screen'>
       <header>
          <nav className='flex border p-1'>
            <ul className='flex gap-5 justify-center'>
              <li><img src={logo} alt="img" className='w-20' onClick={()=>navi('/homepage')}/></li>
              
            </ul>
          </nav>
        </header>
       
       <main className='flex justify-center items-center'>
       <table className='table border min-w-full bg-white border-gray-200'>
        <thead>
            <th className='px-4 py-2 border-b bg-gray-100 text-left text-sm font-semibold text-gray-600'>ID</th>
            <th className='px-4 py-2 border-b bg-gray-100 text-left text-sm font-semibold text-gray-600'>COURSENAME</th>
            <th className='px-4 py-2 border-b bg-gray-100 text-left text-sm font-semibold text-gray-600'>UPDATE</th>
            <th className='px-4 py-2 border-b bg-gray-100 text-left text-sm font-semibold text-gray-600'>DELETE</th>
        </thead>
        <tbody>
            {
                dat.map((user)=>(
                    <tr key={user.courseId}>

                    <td className='px-4 py-2 border-b text-sm text-gray-700'>{user.courseId}</td>
                    <td className='px-4 py-2 border-b text-sm text-gray-700'>{user.courseName}</td>
                    <td className='px-4 py-2 border-b text-sm text-white'>
                      <Link to="/updatecourse" className=' border p-2 bg-blue-400 rounded  hover:bg-blue-800 hover:no-underline hover:text-white  ' onClick={<Updatecourse cid={user.courseId}/>}>UPDATE</Link></td>
                    <td className='px-4 py-2 border-b text-sm text-white'>
                      <button className=' border p-2 bg-red-500 rounded  hover:bg-red-800 hover:no-underline hover:text-white' onClick={()=>{handledelete(user.courseId)
                      }}>DELETE</button>
                    </td>
                    </tr>
                )
                   
                )
            }
        </tbody>
       </table>
       </main>
       
    </div>
  )
}

export default Viewcourse