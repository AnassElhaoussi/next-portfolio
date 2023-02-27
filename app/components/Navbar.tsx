import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Navbar() {
  return (
    <div className="flex justify-between px-20 py-4">
      <span className="text-3xl font-bold text-gray-800">EAnass</span>
      <div className="bg-gray-100 p-4 rounded-md space-x-10">
        <a href="">about</a>
        <a href="">contact</a>
      </div>
    </div>
  )
}

export default Navbar