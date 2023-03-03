'use client'
import React, { CSSProperties, useEffect, useState } from 'react'
import { INavProps } from '../../types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'


function Navbar({darkMode, setDarkMode}: INavProps) {

  const rightPaddingVal = typeof window !== "undefined" 
  && localStorage.getItem('right-padding')
  const leftPaddingVal = typeof window !== "undefined" 
  && localStorage.getItem('left-padding')

  return (
    <div className="flex gap-10 z-10 justify-between items-center flex-wrap gap-y-5">
      <span className="text-3xl font-bold text-gray-800 dark:text-gray-100">EAnass</span>
      <div className='flex flex-col items-end gap-y-2'>
        <div className="flex space-x-10 dark:text-gray-300 lg:text-base text-[2.5vw]"
        >
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
            ? {paddingRight: rightPaddingVal} as CSSProperties
            : {paddingLeft: leftPaddingVal} as CSSProperties
          }
          onClick={() => {
            const currentStateValue = !darkMode
            setDarkMode((currValue) => !currValue)
            localStorage.setItem('darkmode', JSON.stringify(currentStateValue))
            if(currentStateValue) {
              localStorage.setItem('padding-right', "5px")
            } else {
              localStorage.setItem('padding-left', "5px")
            }
          }}
        />
      </div>
    </div>
  )
}

export default Navbar