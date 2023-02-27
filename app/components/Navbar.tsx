import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Navbar() {
  return (
    <div className="flex justify-between items-center">
      <span className="text-3xl font-bold text-gray-800">EAnass</span>
      <div className="flex gap-10">
        <div className="bg-gray-200 p-4 rounded-md space-x-10">
          <a href="">about</a>
          <a href="">contact</a>
        </div>
        <button className="hover:scale-125 transition-all">
          <FontAwesomeIcon icon="moon" />
        </button>
      </div>
    </div>
  )
}

export default Navbar