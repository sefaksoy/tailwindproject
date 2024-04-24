import React from 'react'

export default function MiddleSection() {
  return (
    // Middle (Matrix) Section
    <section className='bg-white'>
        {/* Matrix Section Container */}
        <div className='container flex items-center justify-center relative pl-10 lg:pl-0 '>
            {/* Left Content */}
            <div className=" hidden md:block md:basis-1/3 lg:basis-1/2">
                <img src="https://raw.githubusercontent.com/ArinSoftware/gega-project/main/public/images/matrix.png" alt="" className='lg:absolute lg:bottom-0'/>
            </div>
            {/* Right Content */}
            <div className="md:basis-2/3 lg:basis-1/2 ">
            {/* Right Content Container */}
            <div className='flex flex-col justify-center py-10 w-3/4 md:w-full'>
                <h3 className='tracking-wider text-orange-600'>
                    Action, Drama, Thriller
                </h3>
                <h2 className='mb-2'>
                    Matrix Reloaded
                </h2>
                <p className='text-sm mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias excepturi, quam dolor quos veniam voluptates qui voluptate dignissimos aliquam modi!</p>
                <h3 className='tracking-wider text-rose-600'>
                    8 wins, 34 nominations
                </h3>
            </div>
            {/* Olide */}
            <div className='left-10 absolute -top-12 lg:left-0 w-20 h-20 md:w-24 md:h-24 bg-orange-300 rounded-full flex items-center'>
                <p className='uppercase font-bold text-lg text-rose-500 text-center -rotate-45 '>Oldie & Goldie</p>
            </div>
        </div>
        </div>
    </section>
    )
}
