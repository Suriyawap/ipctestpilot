/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import logo from './assets/undraw_sign_up_n6im.svg'
import { Link } from 'react-router-dom'
import axios from 'axios'
import{Toaster} from '@blueprintjs/core'

let apptoaster=Toaster.create(
    {
        position:"top"
    }
)
const Studentsignup = () => {


  let[data,setdata]=useState({studentName:"",studentEmail:"",studentContact:0,studentPassword:"",studentCourseId:0,studentResultIds:[0]});
  let [cdata,setcdata]=useState([])
  let [cid,setcid]=useState(0)
  useEffect(()=>{
    axios.get("http://localhost:8080/course/getall")
    .then(res1=>setcdata(res1.data.data))
    
  },[])
  function handlechange(e){
    let{name,value}=e.target
    setdata((prevdata)=>({
      ...prevdata,
      [name]:value
    }));
  }

  function handlesubmit(e){
    e.preventDefault()
     axios.post('http://localhost:8080/student',data)
     .then((data)=>{
      apptoaster.show({
        message:"Student Added Sucessfully",
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
        <div className='w-1/3 p-4  my-16'>
        <form method='post' className='flex flex-col  gap-4 border p-10  ' onSubmit={handlesubmit}>
            <h2 className='text-center text-3xl'>SIGNUP</h2>

            <label htmlFor="">NAME:</label>
            <input type="text" name="studentName" value={data.studentName}  onChange={handlechange} className='border p-2 border-slate-800 focus:border-slate-50' />

            <label htmlFor="">EMAIL:</label>
            <input type="email" name="studentEmail" value={data.studentEmail} onChange={handlechange} className='border p-2 border-slate-800 focus:border-slate-50' />

            <label htmlFor="">PASSWORD:</label>
            <input type="password" name="studentPassword" value={data.studentPassword} onChange={handlechange} className='border p-2 border-slate-800 focus:border-slate-50 '/>

            <label htmlFor="">CONTACT:</label>
            <input type="tel" name="studentContact" value={data.studentContact} onChange={handlechange} className='border p-2 border-slate-800 mb-4 focus:border-slate-50' />
            <ul className="space-y-4">
            <label htmlFor="" className=''>COURSE:</label>
              {cdata.map((e)=>{
                 return <li key={e.courseId} className='flex items-center mb-3'>
                <input
                type="radio"
                name='course'
                value={e.courseId}
                checked={cid == e.courseId}
                onChange={d=>setcid(d.target.value)}
                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500 "
              />
                <label htmlFor=""  className="ml-3 block text-sm  text-gray-700">{e.courseName}</label>
               
                 </li>
                
                 
              })}
             </ul>
             
            <button type='submit' className='border p-2 border-slate-800 mb-4'>SUBMIT</button>
            <p>Already Have Account ? <Link to="/studentlogin" className='border bg-orange-300 py-2 px-4 rounded hover:bg-orange-400 hover:no-underline hover:text-white'>LOGIN</Link></p>
        </form>
        </div>
    </div>
   </div>
  )
}

export default Studentsignup