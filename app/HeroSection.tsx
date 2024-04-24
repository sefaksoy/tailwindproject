import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArchive, faArrowRight, faMicrochip, faSearch, faSolarPanel, faTableList } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from '@fortawesome/free-solid-svg-icons/faPlay';

export default function HeroSection() {
  return (
    // Hero Section
    <section className='h-96 lg:h-128 group relative'>
        {/* Hero Image */}
        <img src="https://i.hizliresim.com/j2l890l.jpg" alt="" className='w-full h-full object-cover' />

        {/* Hero Content */}

            <div className='absolute bottom-0 w-full bg-gradient-to-b from-transparent to-black'>
                {/* Hero Content Container */}
                <div className='container pl-10 lg:pl-0'>
                    <h3 className='text-orange-300 tracking-wider group-hover:mb-1 duration-500 '>
                        Action, Drama, Thriller
                    </h3>
                    <h1 className='text-4xl xl:text-6xl text-white group-hover:mb-1 duration-500'>
                        The Dark Knight
                    </h1>
                    <p className='text-zinc-400 group-hover:mb-1 duration-500 text-sm lg:text-base w-3/4 lg:w-2/3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dolore facilis eos explicabo? Voluptatum obcaecati id doloribus nobis odit esse?</p>
                        {/* Detail Container */}
                        <div className='flex space-x-8 opacity-0 group-hover:opacity-100 group-hover:mb-10 lg:group-hover:mb-20 duration-1000'>
                            {/* Watch */}
                            <div className='flex space-x-2 items-center cursor-pointer'>
                                <a href="#" className='text-rose-600 uppercase lg:text-lg hover:text-red duration-500'>Watch Trailer</a>
                                <div className='flex h-8 w-8 text-center justify-center bg-rose-600 text-zinc-300 rounded-full'>
                                <FontAwesomeIcon icon={faPlay} width={15} />
                                </div>
                            </div>
                              {/* Info */}
                              <div className='flex space-x-2 items-center cursor-pointer'>
                                <a href="#" className='text-rose-600 uppercase text-lg hover:text-red duration-500'>Full Synopsis</a>
                                <div className='flex h-8 w-8 text-center justify-center bg-rose-600 text-zinc-300 rounded-full'>
                                <FontAwesomeIcon icon={faArrowRight} width={15} />
                                </div>
                            </div>

                        </div>
                </div>
            </div>

            {/* Points */}
            <div className='flex space-x-3 absolute bottom-5 left-10 opacity-0 group-hover:opacity-100 duration-1000'>
                <div className='w-3 h-3 lg:w-4 h-4 rounded-full bg-rose-600'></div>
                <div className='w-3 h-3 lg:w-4 h-4 rounded-full bg-zinc-400'></div>
                <div className='w-3 h-3 lg:w-4 h-4 rounded-full bg-zinc-400'></div>
                <div className='w-3 h-3 lg:w-4 h-4 rounded-full bg-zinc-400'></div>
            </div>
    </section>
  )
}
