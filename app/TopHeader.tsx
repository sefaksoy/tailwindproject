import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrochip, faSearch, faTableList } from "@fortawesome/free-solid-svg-icons";

export default function TopHeader() {
  return (

    // Header Section
  <header className='bg-black py-6 lg:py-12 text-white font-mono uppercase'>
      {/* Header Container */}
      <div className="container flex items-center justify-between space-x-8 lg:space-x-16">
      {/* Logo */}
      <a href="#" className='pl-4 md:pl-0 text-2xl lg:text-3xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-red-500 to-white'>DARK KNIGHT</a>
      {/* Mobile Menu */}
      {
        <div className='block md:hidden pr-4'>
            <div className='space-y-1 cursor-pointer'>
              <div className='bg-white w-8 h-1 rounded-full'></div>
              <div className='bg-white w-8 h-1 rounded-full'></div>
              <div className='bg-white w-8 h-1 rounded-full'></div>
            </div>
        </div>
      }
      {/* Navigation */}
      <nav className='hidden md:flex justify-between flex-1'>
        {/* Menu */}
        <div className='flex items-center lg:text-lg text-lg space-x-4 lg:space-x-8'>
            <a href="#" className='hover:text-amber-400 transition duration-500'>movies</a>
            <a href="#" className='hover:text-amber-400 transition duration-500'>celebrities</a>
            <a href="#" className='hover:text-amber-400 transition duration-500'>blog</a>
            <a href="#" className='hover:text-amber-400 transition duration-500'>news</a>
            <a href="#" className='hover:text-amber-400 transition duration-500'>about</a>
        </div>
        {/* Login Area */}
        <div className='flex items-center space-x-4 lg:space-x-8'>
          {/* Search Area */}
          <form action="#">
            <div className='border-r px-4 mx-4 py-1 border-rose-600'>
                  <input type="text" className='opacity-0 hover:opacity-100 bg-transparent border-b border-rose-600 focus:outline-none w-24 lg:w-44 transition duration-500'/>
                  <button className='-ml-4 group-hover:ml-0 transition duration-500'>
                    <FontAwesomeIcon icon={faSearch} className='group-hover:text-gega-red transition duration-500' width={20} />
                    </button>

            </div>
          </form>

          {/* Sign Up Area */}
          <div className='flex items-center space-x-4 lg:space-x-8 lg:text-lg'>
            <a href="#">Login</a>
            <a href="#" className='bg-red px-3 py-1 hover:bg-rose-600 text-white cursor-pointer transition duration-500 whitespace-nowrap'>Sign Up</a>
          </div>
        </div>
      </nav>
      </div>
  </header>
  )
}
