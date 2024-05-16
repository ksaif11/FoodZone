import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Details from './pages/Details'
import Favourites from './pages/Favourites'
import Home from './pages/Home'
import Navbar from './components/Navbar'
// import './App.css'

function App() {
  

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/'  element={<Home />} />
        <Route path='/recipe-item/:id'  element={<Details />} />
        <Route path='/favourites'  element={<Favourites />} />
      </Routes>
    </div>
  )
}

export default App
