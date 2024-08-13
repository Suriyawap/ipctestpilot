/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from './assets/logo.png'
import { Toaster } from '@blueprintjs/core';
let apptoaster=Toaster.create(
    {
        position:"top"
    }
)

const Addtrainer = () => {
    let navi=useNavigate();
    let[data,setdata]=useState({userName:"",userEmail:"",userPassword:"",userContact:0,userRole:0});
    let[selected,setselected]=useState([]);

    let subjects=['API_TESTING','DJANGO','FIREFLINK','HIBERNATE_SPRING_FRAMEWORK','J2EE','JAVA','JAVA_PROGRAMMING','MANUAL_TESTING','PYTHON','REACT','SELENIUM','SQL','WEB_TECH'];

    function handlechange(e){
      let{name,value}=e.target
      setdata((prevdata)=>({
        ...prevdata,
        [name]:value
      }));
    }

    function handleCheckbox(event,index){
        if (event.target.checked) {
            setselected(prevIndices => [...prevIndices, index]);
           
          } else {
            setselected(prevIndices => prevIndices.filter(i => i !== index));
          }
    
    }
  
    function handlesubmit(){
        data.userSubjectIds=selected
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
        <header>
          <nav className='flex  p-1'>
            <ul className='flex gap-5 justify-center'>
              <li><img src={logo} alt="img" className='w-20' onClick={()=>navi('/homepage')}/></li>
             
            </ul>
          </nav>
        </header>
    <div className='flex justify-around items-center  '>
    <div className=' w-1/3 my-16' >
           <form  className='flex flex-col  gap-4 border p-10  ' onSubmit={handlesubmit}>
            <h2 className='text-center text-3xl'>ADD TRAINER</h2>

            <label htmlFor="">USERNAME:</label>
            <input type="text" name="userName" value={data.userName}  onChange={handlechange} className='border p-2 border-slate-800 focus:border-slate-50' />

            <label htmlFor="">EMAIL:</label>
            <input type="email" name="userEmail" value={data.userEmail} onChange={handlechange} className='border p-2 border-slate-800 focus:border-slate-50' />

            <label htmlFor="">PASSWORD:</label>
            <input type="password" name="userPassword" value={data.userPassword} onChange={handlechange} className='border p-2 border-slate-800 focus:border-slate-50 '/>

            <label htmlFor="">CONTACT:</label>
            <input type="tel" name="userContact" value={data.userContact} onChange={handlechange} className='border p-2 border-slate-800 mb-4 focus:border-slate-50' />
        </form>
    </div>

    <div className='flex justify-center items-center'>
   <button className=' border p-2 bg-green-500 rounded   hover:bg-green-800 hover:no-underline hover:text-white mb-5' onClick={handlesubmit}>ADD TRAINER</button>
   </div>
        <div className='w-1/3  my-16 border p-5 ' id='sub'>
        <ul className='flex flex-col gap-2 '>
        {subjects.map((item, index) => (
          <li key={index}>
            <label className='text-xl p-2 font-thin'>
              <input
                type="checkbox"
                checked={selected.includes(index)}
                onChange={(event) => handleCheckbox(event, index)}
                className='w-8  h-6 '
              />
              {item}
            </label>
          </li>
        ))}
      </ul> 
        </div>
    </div>
   
   </div>
  )
}

export default Addtrainer