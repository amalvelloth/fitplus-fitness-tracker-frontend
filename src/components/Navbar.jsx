import React from 'react'
import BurgerMenu from './BurgerMenu'

function Navbar({ className }) {
  return (
    <nav className={`h-16 flex items-center justify-center w-full absolute z-10 ${className}`}>
      <BurgerMenu/>
      <h1 className='text-3xl font-bold max-md:text-2xl'>Fit+</h1>
    </nav>
  )
}

export default Navbar