import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArchive, faArrowRight, faMicrochip, faSearch, faSolarPanel, faTableList } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from '@fortawesome/free-solid-svg-icons/faPlay';

export default function MoviesSection() {
  return (
    // Movies Section
    <section className='py-24 bg-black'>
        {/* Movies Content */}
        <div className="container flex flex-col lg:flex-row lg:space-x-16 space-y-8 lg:space-y-0">
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
                    <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3 lg:mb-5">
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
                                        {/* Image 2 */}
                                        <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3">
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
                                        {/* Image 3 */}
                                        <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3">
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
                                        {/* Image 4 */}
                                        <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3">
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
                                        {/* Image 5 */}
                                        <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3">
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
                                        {/* Image 6 */}
                                        <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3">
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
                                                            {/* Image 7 */}
                                                            <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3 hidden md:block lg:hidden">
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
                                                            {/* Image 8 */}
                                                            <div className="group relative overflow-hidden basis-1/3 md:basis-1/4 lg:basis-1/3 hidden md:block lg:hidden">
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
            <div className="basis-1/3 pl-10 lg:pl-0">
                {/* Titles */}
                <h2 className='text-white mb-8 '>Hot News</h2>
                {/* News Container */}
                <div className='flex flex-row lg:flex-col lg:h-full lg:justify-between lg:pb-16 justify-start flex-wrap lg:flex-nowrap space-y-4 '>
                    {/* Item */}
                    <div className='flex items-center group basis-3/4 md:basis-1/2 '>
                        {/* News Image Container */}
                        <div className='basis-1/3 h-full'>
                            <img src="https://raw.githubusercontent.com/ArinSoftware/gega-project/main/public/images/new1.jpg" alt="" className='h-full w-full object-cover'/>
                        </div>
                        {/* Item Detail */}
                        <div className='pl-8 basis-2/3 text-white group-hover:text-orange-300 group-hover:cursor-pointer duration-500'>
                            <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, exercitationem.</p>
                            <p className='text-xs tracking-tighter mt-2 font-bold'>ON NOW 01 01 2024</p>
                        </div>
                    </div>
                    {/* Item */}
                    <div className='flex items-center group basis-3/4 md:basis-1/2 '>
                        {/* News Image Container */}
                        <div className='basis-1/3 h-full'>
                            <img src="https://raw.githubusercontent.com/ArinSoftware/gega-project/main/public/images/new1.jpg" alt="" className='h-full w-full object-cover'/>
                        </div>
                        {/* Item Detail */}
                        <div className='pl-8 basis-2/3 text-white group-hover:text-orange-300 group-hover:cursor-pointer duration-500'>
                            <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, exercitationem.</p>
                            <p className='text-xs tracking-tighter mt-2 font-bold'>ON NOW 01 01 2024</p>
                        </div>
                    </div>
                    {/* Item */}
                    <div className='flex items-center group basis-3/4 md:basis-1/2 '>
                        {/* News Image Container */}
                        <div className='basis-1/3 h-full'>
                            <img src="https://raw.githubusercontent.com/ArinSoftware/gega-project/main/public/images/new1.jpg" alt="" className='h-full w-full object-cover'/>
                        </div>
                        {/* Item Detail */}
                        <div className='pl-8 basis-2/3 text-white group-hover:text-orange-300 group-hover:cursor-pointer duration-500'>
                            <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, exercitationem.</p>
                            <p className='text-xs tracking-tighter mt-2 font-bold'>ON NOW 01 01 2024</p>
                        </div>
                    </div>
                    {/* Item */}
                    <div className='flex items-center group basis-3/4 md:basis-1/2 '>
                        {/* News Image Container */}
                        <div className='basis-1/3 h-full'>
                            <img src="https://raw.githubusercontent.com/ArinSoftware/gega-project/main/public/images/new1.jpg" alt="" className='h-full w-full object-cover'/>
                        </div>
                        {/* Item Detail */}
                        <div className='pl-8 basis-2/3 text-white group-hover:text-orange-300 group-hover:cursor-pointer duration-500'>
                            <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, exercitationem.</p>
                            <p className='text-xs tracking-tighter mt-2 font-bold'>ON NOW 01 01 2024</p>
                        </div>
                    </div>
                    {/* Item */}
                    <div className='flex items-center group basis-3/4 md:basis-1/2 md:hidden lg:flex'>
                        {/* News Image Container */}
                        <div className='basis-1/3 h-full'>
                            <img src="https://raw.githubusercontent.com/ArinSoftware/gega-project/main/public/images/new1.jpg" alt="" className='h-full w-full object-cover'/>
                        </div>
                        {/* Item Detail */}
                        <div className='pl-8 basis-2/3 text-white group-hover:text-orange-300 group-hover:cursor-pointer duration-500'>
                            <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, exercitationem.</p>
                            <p className='text-xs tracking-tighter mt-2 font-bold'>ON NOW 01 01 2024</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>

  )
}
