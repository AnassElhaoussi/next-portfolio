import React from 'react'
import { Navbar, Home } from './components'

function AppWrapper() {
  return (
    <div 
    className='flex flex-col bg-gradient-to-t from-white 
    to-gray-100 h-screen px-10 py-4'>
      <Navbar />
      <Home />
    </div>
  )
}

export default AppWrapper