import { useState } from 'react'
import {Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import BookCatalog from './pages/BookCatalog'
import Profile from './pages/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
    
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/catlog' element={<BookCatalog/>}/>
      <Route path='/profile' element={<Profile/>}/>
      </Routes>
    
      
    </>
  )
}

export default App
