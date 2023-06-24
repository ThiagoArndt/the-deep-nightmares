import React from 'react'

function Navbar() {
  return (
    <header className="sticky top-0 z-50 flex flex-row justify-between w-full items-center px-48 py-5">
    <img className="w-44 h-auto" src='/images/logo.png'></img>
    <ul className='flex flex-row gap-10 text-xl text-white'>
      <li>Inicio</li>
      <li>Info</li>
      <li>Reviews</li>
      <li>Contato</li>
    </ul>
   </header>
  )
}

export default Navbar