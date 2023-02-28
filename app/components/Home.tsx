import React from 'react'
import { githubImage, image1, image2, image3, image4 } from '../assets'
import Image from 'next/image'

function Home() {
  return (
    <div className='flex items-center h-screen'>
      <div className='space-y-4 z-50'>
        <h1 className='lg:text-[10vw] text-[15vw] leading-[90%] font-extrabold dark:text-white' 
        >Anass <span className='block text-blue-700 dark:text-blue-500'>ELHAOUSSI</span></h1>
        <p className='text-gray-600 dark:text-gray-400' 
        >I'm Anass ELHAOUSSI, a high school student and a full-stack web developer</p>
        <button 
        className='bg-blue-700 dark:bg-blue-500 rounded-full py-3 px-6 text-white font-light hover:scale-110 transition-all'
        >Go to projects</button>    
      </div>
      <span className='absolute md:flex hidden flex-col gap-1 right-32 top-40 text-start bg-gray-100 dark:text-gray-300 dark:bg-gray-800 p-4 rounded-lg text-6xl font-semibold'>3+ 
        <span className='block text-base font-normal'>years of experience</span>
      </span>
    </div>
  )
}

export default Home