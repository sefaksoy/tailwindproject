import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArchive, faArrowRight, faMicrochip, faSearch, faSolarPanel, faTableList } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from '@fortawesome/free-solid-svg-icons/faPlay';

export default function MoviesSection() {
  return (
    // Movies Section
    <section className='py-24 bg-black'>
        {/* Movies Content */}
        <div className="container flex space-x-16">
            {/* Left Content */}
            <div className="basis-2/3 ">
                {/* Titles */}
                <div>
                <h2 className="flex space-x-2 divide-x divide-rose-600 divide-opacity-50 mb-8 pl-10 lg:pl-0">
                <a href="#" className='text-rose-600'>Latest</a>
                <a href="#" className='text-white pl-2 hover:text-rose-600 duration-500'>Popular</a>
                <a href="#" className='text-white pl-2 hover:text-rose-600 duration-500'>Best</a>
                </h2>
                </div>
                {/* Images Container */}
                <div className="flex flex-wrap">
                    {/* Image 1 */}
                    <div className="group relative overflow-hidden basis-1/3">
                            {/* Image */}
                            <img src="https://raw.githubusercontent.com/ArinSoftware/gega-project/main/public/images/mv1.jpg" alt="" className='group-hover:scale-110 group-hover:opacity-50 duration-500' />
                            {/* Image Detail Container*/}
                            <div className="absolute px-6 bottom-8">
                                <h3 className='text-white group-hover:text-orange-600 group-hover:mb-2 duration-500'>Oblivion</h3>
                                <p className='text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 group-hover:text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, aut!</p>
                                {/* Icons Container */}
                                <div className='absolute flex space-x-8 text-white opacity-0 group-hover:opacity-100 duration-500 -bottom-2 group-hover:bottom-2'>
                                    <a className='hover:text-rose-600' href="#"><FontAwesomeIcon icon={faPlay} width={15}/></a>
                                    <a className='hover:text-rose-600' href="#"><FontAwesomeIcon icon={faArrowRight} width={15}/></a>
                                </div>
                            </div>
                    </div>
                                        {/* Image 1 */}
                                        <div className="group relative overflow-hidden basis-1/3">
                            {/* Image */}
                            <img src="https://raw.githubusercontent.com/ArinSoftware/gega-project/main/public/images/mv1.jpg" alt="" className='group-hover:scale-110 group-hover:opacity-50 duration-500' />
                            {/* Image Detail Container*/}
                            <div className="absolute px-6 bottom-8">
                                <h3 className='text-white group-hover:text-orange-600 group-hover:mb-2 duration-500'>Oblivion</h3>
                                <p className='text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 group-hover:text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, aut!</p>
                                {/* Icons Container */}
                                <div className='absolute flex space-x-8 text-white opacity-0 group-hover:opacity-100 duration-500 -bottom-2 group-hover:bottom-2'>
                                    <a className='hover:text-rose-600' href="#"><FontAwesomeIcon icon={faPlay} width={15}/></a>
                                    <a className='hover:text-rose-600' href="#"><FontAwesomeIcon icon={faArrowRight} width={15}/></a>
                                </div>
                            </div>
                    </div>
                                        {/* Image 1 */}
                                        <div className="group relative overflow-hidden basis-1/3">
                            {/* Image */}
                            <img src="https://raw.githubusercontent.com/ArinSoftware/gega-project/main/public/images/mv1.jpg" alt="" className='group-hover:scale-110 group-hover:opacity-50 duration-500' />
                            {/* Image Detail Container*/}
                            <div className="absolute px-6 bottom-8">
                                <h3 className='text-white group-hover:text-orange-600 group-hover:mb-2 duration-500'>Oblivion</h3>
                                <p className='text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 group-hover:text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, aut!</p>
                                {/* Icons Container */}
                                <div className='absolute flex space-x-8 text-white opacity-0 group-hover:opacity-100 duration-500 -bottom-2 group-hover:bottom-2'>
                                    <a className='hover:text-rose-600' href="#"><FontAwesomeIcon icon={faPlay} width={15}/></a>
                                    <a className='hover:text-rose-600' href="#"><FontAwesomeIcon icon={faArrowRight} width={15}/></a>
                                </div>
                            </div>
                    </div>
                                        {/* Image 1 */}
                                        <div className="group relative overflow-hidden basis-1/3">
                            {/* Image */}
                            <img src="https://raw.githubusercontent.com/ArinSoftware/gega-project/main/public/images/mv1.jpg" alt="" className='group-hover:scale-110 group-hover:opacity-50 duration-500' />
                            {/* Image Detail Container*/}
                            <div className="absolute px-6 bottom-8">
                                <h3 className='text-white group-hover:text-orange-600 group-hover:mb-2 duration-500'>Oblivion</h3>
                                <p className='text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 group-hover:text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, aut!</p>
                                {/* Icons Container */}
                                <div className='absolute flex space-x-8 text-white opacity-0 group-hover:opacity-100 duration-500 -bottom-2 group-hover:bottom-2'>
                                    <a className='hover:text-rose-600' href="#"><FontAwesomeIcon icon={faPlay} width={15}/></a>
                                    <a className='hover:text-rose-600' href="#"><FontAwesomeIcon icon={faArrowRight} width={15}/></a>
                                </div>
                            </div>
                    </div>
                                        {/* Image 1 */}
                                        <div className="group relative overflow-hidden basis-1/3">
                            {/* Image */}
                            <img src="https://raw.githubusercontent.com/ArinSoftware/gega-project/main/public/images/mv1.jpg" alt="" className='group-hover:scale-110 group-hover:opacity-50 duration-500' />
                            {/* Image Detail Container*/}
                            <div className="absolute px-6 bottom-8">
                                <h3 className='text-white group-hover:text-orange-600 group-hover:mb-2 duration-500'>Oblivion</h3>
                                <p className='text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 group-hover:text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, aut!</p>
                                {/* Icons Container */}
                                <div className='absolute flex space-x-8 text-white opacity-0 group-hover:opacity-100 duration-500 -bottom-2 group-hover:bottom-2'>
                                    <a className='hover:text-rose-600' href="#"><FontAwesomeIcon icon={faPlay} width={15}/></a>
                                    <a className='hover:text-rose-600' href="#"><FontAwesomeIcon icon={faArrowRight} width={15}/></a>
                                </div>
                            </div>
                    </div>
                                        {/* Image 1 */}
                                        <div className="group relative overflow-hidden basis-1/3">
                            {/* Image */}
                            <img src="https://raw.githubusercontent.com/ArinSoftware/gega-project/main/public/images/mv1.jpg" alt="" className='group-hover:scale-110 group-hover:opacity-50 duration-500' />
                            {/* Image Detail Container*/}
                            <div className="absolute px-6 bottom-8">
                                <h3 className='text-white group-hover:text-orange-600 group-hover:mb-2 duration-500'>Oblivion</h3>
                                <p className='text-xs opacity-0 group-hover:opacity-100 group-hover:mb-10 duration-500 group-hover:text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, aut!</p>
                                {/* Icons Container */}
                                <div className='absolute flex space-x-8 text-white opacity-0 group-hover:opacity-100 duration-500 -bottom-2 group-hover:bottom-2'>
                                    <a className='hover:text-rose-600' href="#"><FontAwesomeIcon icon={faPlay} width={15}/></a>
                                    <a className='hover:text-rose-600' href="#"><FontAwesomeIcon icon={faArrowRight} width={15}/></a>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            {/* Right Content */}
            <div className="basis-1/3 bg-blue-500 ">
                {/* Titles */}
                <h2 className='text-white mb-8'>Hot News</h2>
                {/* News Container */}
                <div className='flex flex-col h-full justify-center space-y-4'>
                    {/* Item */}
                    <div className='flex items-center group'>
                        {/* News Image Container */}
                        <div className='basis-1/3 h-full'>
                            <img src="https://raw.githubusercontent.com/ArinSoftware/gega-project/main/public/images/new1.jpg" alt="" className='h-full w-full object-cover'    />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

  )
}
