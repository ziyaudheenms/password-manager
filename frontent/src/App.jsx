import { useState } from 'react'
import Example from './components/Navbar'
import Login from './components/Login'
import Home from "./components/Home"
import Register from './components/Register'
import { BrowserRouter ,Routes , Route , Navigate } from "react-router-dom"


function App() {
 

  return (
    <>
      <Example fixed="top" />
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/mypage' element={<Home />} />
            <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
  

    </>
  )
}


export default App
