'use client'
import React from 'react'
import { githubImage, image1, image2, image3, image4 } from '../assets'
import Image from 'next/image'
import {motion} from 'framer-motion'

function Home({darkMode}: {darkMode: boolean}) {
  return (
    <div className='flex items-center h-screen'>
      <div className='space-y-4 z-50'>
        <h1 className='lg:text-[10vw] text-[15vw] leading-[90%] font-extrabold dark:text-white' 
        >Anass <motion.div initial={{x: 20}} animate={{x: 0}} transition={{delay: 0.5}} 
        className='block text-blue-700 dark:text-blue-500'>ELHAOUSSI</motion.div></h1>
        <p className='text-gray-600 dark:text-gray-400' 
        >I'm Anass ELHAOUSSI, a high school student and a full-stack web developer</p>
        <button 
        className='bg-blue-700 dark:bg-blue-500 rounded-full py-3 px-6 text-white font-light hover:scale-110 transition-all'
        >Go to projects</button>    
      </div>
      <span className='absolute md:flex hidden flex-col gap-1 right-32 top-40 text-start bg-gray-100 dark:text-gray-300 dark:bg-gray-800 p-4 rounded-lg text-6xl font-semibold'>
        <motion.div initial={{x: -30}} animate={{x: 0}} transition={{delay: 0.5}}>3+</motion.div>
        <span className='block text-base font-normal'>years of experience</span>
      </span>
      <svg className='absolute bottom-0 right-0 left-0'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill={darkMode ? "#2196F3" : "#1976D2"} fill-opacity="1" d="M0,320L60,320C120,320,240,320,360,282.7C480,245,600,171,720,149.3C840,128,960,160,1080,170.7C1200,181,1320,171,1380,165.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
      </svg>
          
    </div>
  )
}

export default Home