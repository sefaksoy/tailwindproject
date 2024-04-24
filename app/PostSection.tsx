import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArchive, faArrowRight, faMicrochip, faSearch, faSolarPanel, faTableList } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from '@fortawesome/free-solid-svg-icons/faPlay';

export default function PostSection() {
  return (
    <>
    <section className='py-24 bg-black text-white'>
        {/* Container */}
        <div className="container px-10 lg:px-0">
            {/* Title */}
            <h2><a href="#" className='text-rose-600'>Popular Posts</a></h2>
            {/* Grid Area */}
            <div className="grid grid-cols-6 gap-10">
                {/* Item 1 */}
                <div className='col-span-6 md:col-span-3 border border-rose-600'>
                    {/* Item 1 Header */}
                    <div className='border-b border-rose-600 p-4 flex items-center justify-between'>
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <img src="https://raw.githubusercontent.com/ArinSoftware/gega-project/main/public/images/userava1.jpg" alt="" className='rounded-full'/>
                    </div>
                    {/* Item 1 Para */}
                    <p className='p-4 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia vero repudiandae natus incidunt repellendus aliquid maiores sit nulla mollitia eos.</p>
                {/* Item 1 Footer */}
                <div className='border-t border-rose-600 p-4 flex justify-end space-x-4'>
                    <p>
                    {/* <FontAwesomeIcon icon={faHeart} /> */}
                        On Dec 17, 2024
                    </p>
                    <div className='flex items-center justify-center space-x-1'>
                    {/* <FontAwesomeIcon icon={faComment} width={15}/> */}
                    <p>09</p>
                    {/* <FontAwesomeIcon icon={faComment} width={15}/> */}
                    <p>12</p>
                    </div>
                </div>
                </div>

                {/* Item 2 */}
                <div className='col-span-6 md:col-span-3 border border-rose-600'>
                    {/* Item 2 Header */}
                    <div className='border-b border-rose-600 p-4 flex items-center justify-between'>
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <img src="https://raw.githubusercontent.com/ArinSoftware/gega-project/main/public/images/userava1.jpg" alt="" className='rounded-full'/>
                    </div>
                    {/* Item 2 Para */}
                    <p className='p-4 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia vero repudiandae natus incidunt repellendus aliquid maiores sit nulla mollitia eos.</p>
                {/* Item 2 Footer */}
                <div className='border-t border-rose-600 p-4 flex justify-end space-x-4'>
                    <p>
                    {/* <FontAwesomeIcon icon={faHeart} /> */}
                        On Dec 17, 2024
                    </p>
                    <div className='flex items-center justify-center space-x-1'>
                    {/* <FontAwesomeIcon icon={faComment} width={15}/> */}
                    <p>09</p>
                    {/* <FontAwesomeIcon icon={faComment} width={15}/> */}
                    <p>12</p>
                    </div>
                </div>
                </div>

                    {/* Item 3 */}
                     <div className='col-span-6 md:col-span-3 lg:col-span-2 border border-rose-600'>
                    {/* Item 3 Header */}
                    <div className='border-b border-rose-600 p-4 flex items-center justify-between'>
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <img src="https://raw.githubusercontent.com/ArinSoftware/gega-project/main/public/images/userava1.jpg" alt="" className='rounded-full'/>
                    </div>
                    {/* Item 3 Para */}
                    <p className='p-4 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia vero repudiandae natus incidunt repellendus aliquid maiores sit nulla mollitia eos.</p>
                {/* Item 3 Footer */}
                <div className='border-t border-rose-600 p-4 flex justify-end space-x-4'>
                    <p>
                    {/* <FontAwesomeIcon icon={faHeart} /> */}
                        On Dec 17, 2024
                    </p>
                    <div className='flex items-center justify-center space-x-1'>
                    {/* <FontAwesomeIcon icon={faComment} width={15}/> */}
                    <p>09</p>
                    {/* <FontAwesomeIcon icon={faComment} width={15}/> */}
                    <p>12</p>
                    </div>
                </div>
                </div>

                     {/* Item 4 */}
                    <div className='col-span-6 md:col-span-3 lg:col-span-2 border border-rose-600'>
                    {/* Item 4 Header */}
                    <div className='border-b border-rose-600 p-4 flex items-center justify-between'>
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <img src="https://raw.githubusercontent.com/ArinSoftware/gega-project/main/public/images/userava1.jpg" alt="" className='rounded-full'/>
                    </div>
                    {/* Item 4 Para */}
                    <p className='p-4 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia vero repudiandae natus incidunt repellendus aliquid maiores sit nulla mollitia eos.</p>
                {/* Item 4 Footer */}
                <div className='border-t border-rose-600 p-4 flex justify-end space-x-4'>
                    <p>
                    {/* <FontAwesomeIcon icon={faHeart} /> */}
                        On Dec 17, 2024
                    </p>
                    <div className='flex items-center justify-center space-x-1'>
                    {/* <FontAwesomeIcon icon={faComment} width={15}/> */}
                    <p>09</p>
                    {/* <FontAwesomeIcon icon={faComment} width={15}/> */}
                    <p>12</p>
                    </div>
                </div>
                </div>

                    {/* Item 5 */}
                     <div className='hidden lg:block lg:col-span-2 border border-rose-600'>
                    {/* Item 5 Header */}
                    <div className='border-b border-rose-600 p-4 flex items-center justify-between'>
                        <h3>Lorem ipsum dolor sit amet.</h3>
                        <img src="https://raw.githubusercontent.com/ArinSoftware/gega-project/main/public/images/userava1.jpg" alt="" className='rounded-full'/>
                    </div>
                    {/* Item 5 Para */}
                    <p className='p-4 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia vero repudiandae natus incidunt repellendus aliquid maiores sit nulla mollitia eos.</p>
                {/* Item 5 Footer */}
                <div className='border-t border-rose-600 p-4 flex justify-end space-x-4'>
                    <p>
                    {/* <FontAwesomeIcon icon={faHeart} /> */}
                        On Dec 17, 2024
                    </p>
                    <div className='flex items-center justify-center space-x-1'>
                    {/* <FontAwesomeIcon icon={faComment} width={15}/> */}
                    <p>09</p>
                    {/* <FontAwesomeIcon icon={faComment} width={15}/> */}
                    <p>12</p>
                    </div>
                </div>
                </div>

            </div>
        </div>
    </section>
    </>
  )
}
