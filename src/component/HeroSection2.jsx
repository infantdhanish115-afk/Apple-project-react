import React from 'react'
import mackbook1 from '../assets/images/mackbook1.jpg'

const HeroSection2 = () => {
  return (
    <div className="relative mt-2">
            <img className='w-full h-auto' src={mackbook1} alt="" />
            <div className="text-white text-center absolute top-5 left-1/2 -translate-x-1/2 md:bottom-10 md:left-[35%] md:-translate-x-0">
            <h1 className='font-bold text-5xl'>MacBook Pro 14"</h1>
            <h4 className='font-bold text-xl mb-1'>Supercharged by M5.</h4>
                <button className='bg-blue-500 rounded-2xl w-28 h-10 text-lg mr-2  hover:bg-blue-400'>Learn more</button>
                <button className='bg-black rounded-2xl w-20 h-10 text-lg hover:bg-blue-400 border-blue-500'>Buy</button>
            </div>
          </div>
  )
}

export default HeroSection2
