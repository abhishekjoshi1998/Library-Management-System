import { useState } from 'react'
import {Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import BookCatalog from './pages/BookCatalog'
import Profile from './pages/Profile'
import AdminDashboard from './pages/AdminDashboard'
import Register from './pages/Register'
import BorrowedBooks from './pages/BorrowedBooks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
    
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/catalog' element={<BookCatalog/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/admin' element={<AdminDashboard/>}/>
      <Route path='/signupr' element={<Register/>}/>
      <Route path='/borrow' element={<BorrowedBooks/>}/>
      </Routes>
    
      
    </>
  )
}

export default App
