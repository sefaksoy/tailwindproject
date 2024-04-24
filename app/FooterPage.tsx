import React from 'react'

export default function FooterPage() {
  return (
    // Footer Section
    <footer className='bg-black text-white'>
        {/* Footer Container */}
        <div className="container flex flex-col md:flex-row px-10 lg:px-0 pb-8">
        {/* Left */}
        <div className="basis-1/3">
                  {/* Logo */}
      <a href="#" className='text-2xl lg:text-3xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-red-500 to-white'>TWPR</a>
      <p className='text-sm mt-2'>2024 &copy; Copyright</p>
        </div>
        <div className="basis-1/3">
        <h2 className='mb-2 text-rose-600'>Links</h2>
        <div className='grid grid-cols-5 gap-2 uppercase'>
            <a href="#" className='col-span-2 hover:text-orange-600 duration-500'>Mobiles</a>
            <a href="#" className='col-span-2 hover:text-orange-600 duration-500'>Celebrities</a>
            <a href="#" className='col-span-2 hover:text-orange-600 duration-500'>Blog</a>
            <a href="#" className='col-span-2 hover:text-orange-600 duration-500'>About</a>
            <a href="#" className='col-span-2 hover:text-orange-600 duration-500'>News</a>
        </div>
      </div>
      {/* Right */}
      <div className='basis-1/3'>
      <h2 className='mb-2 text-rose-600'>Follow Us</h2>
        <form action="" className='flex'>
            <input type="text" placeholder='Typer Your e-Mail' className='uppercase py-1 px-2 bg-transparent border border-rose-600 placeholder:text-xs outline-none' />
            <button className='py-1 px-2 border border-rose-600 bg-rose-600 text-white uppercase'>Subscribe</button>
        </form>
      </div>
        </div>
    </footer>
  )
}
