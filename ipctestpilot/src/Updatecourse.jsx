/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from './assets/logo.png'
import logo1 from './assets/undraw_add_notes_re_ln36.svg'
import axios from 'axios';
import { Toaster } from '@blueprintjs/core';
import Homepage from './Homepage';
import {useNavigate} from 'react-router-dom'

let apptoaster=Toaster.create(
    {
        position:"top"
    }
)

const Updatecourse = ({id}) => {
  let navi=useNavigate();
  let arr=axios.get(`http://localhost:8080/course/${id}`)
    

    let[selected,setselected]=useState([]);
    let[coursename,setcoursename]=useState("");

    let subjects=['API_TESTING','DJANGO','FIREFLINK','HIBERNATE_SPRING_FRAMEWORK','J2EE','JAVA','JAVA_PROGRAMMING','MANUAL_TESTING','PYTHON','REACT','SELENIUM','SQL','WEB_TECH'];

    function handleCheckbox(event,index){
        if (event.target.checked) {
            setselected(prevIndices => [...prevIndices, index]);
          } else {
            setselected(prevIndices => prevIndices.filter(i => i !== index));
          }
    
    }

    function handlesubmit(e){
        e.preventDefault()
        if (selected.length > 0) {
            console.log(selected)
        axios.post(`http://localhost:8080/course?courseName=${coursename}`,selected)
        .then((res)=>{
            console.log(res.data.message)
            apptoaster.show({
                message:"Course Created Sucessfully",
                intent:"success",
                timeout:2000
             })
            
        }).catch((e)=>{
            apptoaster.show({
                message:e,
                intent:"danger",
                timeout:2000
             })
        })
          } else {
            apptoaster.show({
                message:"invalid input",
                intent:"danger",
                timeout:2000
             })
          }
       
        
    }
 
  return (
    <div>
         <header>
          <nav className='flex border p-1'>
            <ul className='flex gap-5 justify-center'>
              <li><img src={logo} alt="img" className='w-20' onClick={()=>navi('/homepage')}/></li>
              <li className='leading-10 my-2 '> <Link to="/createcourse" className=' border p-2 bg-orange-200 rounded  hover:bg-orange-400 hover:no-underline hover:text-white  '>CREATECOURSE</Link></li>
            </ul>
          </nav>
        </header>

        <main className='border flex justify-center items-center my-10 mx-20 p-5 bg-gradient-to-r from-white via-orange-100 to-orange-300'>
            <div>
                <img src={logo1} alt="logo"  className='w-4/5'/>
            </div>
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
        <br />

           <div className='flex gap-5'>
           <input type="text" name="courseName" placeholder='Enter Course Name' className='border p-2' onChange={(e)=>{setcoursename(e.target.value)}} />
           <button type="submit" className='border p-2' onClick={handlesubmit}>Create Course</button>
           </div>
      </ul>

           
        </main>

    </div>
  )
}

export default Updatecourse