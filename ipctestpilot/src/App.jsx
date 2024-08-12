/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */

import {BrowserRouter,Router,Route, Routes} from 'react-router-dom'

import './App.css'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import Homepage from './Homepage'
import Createcourse from './Createcourse'
import Viewcourse from './Viewcourse'
import Updatecourse from './Updatecourse'

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/homepage" element={<Homepage/>} />
    <Route path="/createcourse" element={<Createcourse/>} />
    <Route path="/viewcourse" element={<Viewcourse/>} />
    <Route path="/updatecourse" element={<Updatecourse/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
