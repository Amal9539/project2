import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AppBar, Toolbar, Typography } from '@mui/material'
import { Route, Router, Routes } from 'react-router-dom'
import Navbar from './Component/Navbar'
import View from './Component/View'
import Add from './Component/Add'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path='/add' element={<Add />} />
        <Route path='/View' element={< View/>} />
        
      </Routes>
    </>
  )
}

export default App
