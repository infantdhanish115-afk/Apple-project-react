import React from 'react'
import platinum from '../assets/images/platinum.jpg';

const HeroSection = () => {
  return (
    <>
      <div className="relative">
        <img className='w-full h-auto' src={platinum} alt="" />
        <div className="text-white text-right absolute left-1/2 -translate-x-1/2 md:top-2 md:right-[1%] md:-translate-x-0">
            <button className='bg-blue-500 rounded-2xl w-28 h-10 text-lg mr-2  hover:bg-blue-400'>Learn more</button>
            <button className='bg-black rounded-2xl w-20 h-10 text-lg hover:bg-blue-400 border-blue-500'>Buy</button>
        </div>
      </div>
    </>
  )
}

export default HeroSection
