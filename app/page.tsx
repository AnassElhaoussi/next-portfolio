
'use client'
import React, {useState} from 'react'
import { Navbar, Home } from './components'


function AppWrapper() {
  const [darkMode, setDarkMode] = useState<boolean>(false)
  return (
    <div className={darkMode ? "dark" : ""}>
      <div 
      className='flex flex-col bg-gray-50 dark:bg-gray-900 h-screen px-10 py-4'>
        <div className='absolute w-60 h-60 bg-blue-200 dark:bg-inherit rounded-full blur-3xl'></div>
        <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} />
        <Home />
        <div className='absolute w-60 h-60 bottom-0 right-0 bg-blue-200 dark:bg-inherit rounded-full blur-3xl'></div>
      </div>
    </div>
  )
}

export default AppWrapper