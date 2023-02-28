'use client'
import React from 'react'
import { INavProps } from '../../types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'


function Navbar({darkMode, setDarkMode}: INavProps) {
  return (
    <div className="flex gap-10 z-10 justify-between items-center flex-wrap gap-y-5">
      <span className="text-3xl font-bold text-gray-800 dark:text-gray-100">EAnass</span>
      <div className="space-x-10 dark:text-gray-300">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Experience</a>
        <a href="">Projects</a>
        <a href="">Contact</a>
      </div>
      <FontAwesomeIcon
        icon={darkMode ? faSun : faMoon}
        className='dark:bg-gray-800 bg-gray-200 px-8 py-2 rounded-md hover:scale-125 transition-all cursor-pointer dark:text-white'
        style={
          darkMode 
          ? {paddingRight: "5px"} 
          : {paddingLeft: "5px"}
        }
        onClick={() => setDarkMode(!darkMode)}
      />

    </div>
  )
}

export default Navbar