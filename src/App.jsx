import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agents from './pages/Agents'

const App = () => {
  return (
    <div className='text-#fff'>
      <Routes>
        <Route path=' / '            element={<Home />} />
        <Route path=' /Agents ' element={<Agents  />} />
      </Routes>
    </div>
  )
}

export default App
