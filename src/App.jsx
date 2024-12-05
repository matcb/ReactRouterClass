import { useState } from 'react'
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {Routes, Route} from 'react-router-dom'
import Products from './pages/products'
import About from './pages/about'
import Contact from './pages/contact'
import Home from './pages/home'

const App = () => {

  return (
    <>
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact />}/>
        <Route path='/products' element={<Products/>} />
        <Route path='/about' element={<About />}/>
      </Routes>
    </div>
    </>
  )
}

export default App
