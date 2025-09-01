import React from 'react'
import {Link,Route , Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agents from './pages/Agents'
import Projects from './pages/Projects'

const App = () => {
  return (
    <div className='text-white text-8xl'>

      
      {/* <Link to='/'> Home</Link>
      <Link to='/Agents'> Agents</Link>
      <Link to='/Projects'> Projects</Link> */}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Agents' element={<Agents />} />
        <Route path='/Projects' element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App
