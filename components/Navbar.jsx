import React from 'react'

function Navbar() {
  return (
    <header className='font-sans shadow-2xl fixed top-0 w-full z-50'>
      <nav className="navbar  bg-background flex flex-row justify-between px-14">
        <a href=""><h1 className='font-bold'>Adem.Dev</h1></a>
        <a target='_blank' className="inline-block rounded   bg-prim px-6 py-2 text-sm font-semibold text-white hover:bg-sec hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500" href="https://drive.google.com/file/d/1FUHgW5k2dhAsRjNyDEDFHX85JKsbmuHQ/view?usp=sharing">My Resume</a>
      </nav>
    </header>
    )
}

export default Navbar