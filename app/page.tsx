
'use client'
import React, {useEffect, useState} from 'react'
import { Navbar, Home } from './Pages'


function AppWrapper() {

  const [darkMode, setDarkMode] = useState<boolean>(
    JSON.parse(localStorage.getItem('dark-mode') as string)
  )
  return (
    <div className={darkMode ? "dark" : ""}>
      <div 
      className='flex flex-col bg-gray-50 dark:bg-gray-900 h-screen px-10 py-4'>
        <div className='absolute w-60 h-60 bg-blue-200 dark:bg-inherit 
        rounded-full blur-3xl'></div>
        <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} />
        <Home darkMode={darkMode} />
      </div>
    </div>
  )
}

export default AppWrapper