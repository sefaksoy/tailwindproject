import React from 'react'

export default function MoviesSection() {
  return (
    // Movies Section
    <section className='py-24 bg-black'>
        {/* Movies Content */}
        <div className="container flex space-x-16">
            {/* Left Content */}
            <div className="basis-2/3 bg-rose-500">
                {/* Titles */}
                <div className="flex space-x-2 divide-x divide-white divide-opacity-50 mb-8 pl-10 lg:pl-0">
                    <h2>
                        <a href="#">Latest</a>
                        <a href="#">Popular</a>
                        <a href="#">Best</a>
                    </h2>
                </div>
            </div>
            {/* Right Content */}
            <div className="basis-1/3 bg-blue-500">
                Right Content
            </div>
        </div>
    </section>

  )
}
