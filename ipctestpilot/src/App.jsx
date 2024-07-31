/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */

import {BrowserRouter,Router,Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
