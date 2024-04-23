import React from 'react';

export default function TopHeader() {
  return (

    // Header Section
  <header className='bg-black py-12 text-white font-mono uppercase'>
      {/* Header Container */}
      <div className="container flex items-center justify-between space-x-16">
      {/* Logo */}
      <a href="#" className='text-3xl font-bold'>DARK KNIGHT</a>
      {/* Navigation */}
      <nav className='flex justify-between flex-1'>
        {/* Menu */}
        <div className='flex items-center text-lg space-x-8'>
            <a href="#" className='hover:text-amber-400 transition duration-500'>movies</a>
            <a href="#" className='hover:text-amber-400 transition duration-500'>celebrities</a>
            <a href="#" className='hover:text-amber-400 transition duration-500'>blog</a>
            <a href="#" className='hover:text-amber-400 transition duration-500'>news</a>
            <a href="#" className='hover:text-amber-400 transition duration-500'>about</a>
        </div>
        {/* Login Area */}
        <div className='flex items-center space-x-8'>
          {/* Search Area */}
          <form action="#">
            <div className='border-r px-4 mx-4 py-1 border-red-600'>
                  <input type="text" className='bg-transparent border-b border-red-600 focus:outline-none w-44'/>
                  <button><i className="fa-solid fa-user text-white"></i>tset</button>
                 <FontAwesomeIcon icon={faHouse} />
                  
            </div>
          </form>
        </div>
      </nav>
      </div>
  </header>
  )
}
