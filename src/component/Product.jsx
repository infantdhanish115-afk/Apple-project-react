import React from 'react'
import {FaApple} from 'react-icons/fa'
import iwatch from '../assets/images/iwatch.jpg'
import mackbook2 from '../assets/images/mackbook-2.jpg'
import airpod from '../assets/images/airpod.jpg'
import iphone from '../assets/images/iphone15.jpg'
import ipad from '../assets/images/ipad.jpg'
import exchange from '../assets/images/exchange.jfif'

let ProductData=[
    {
        image:iwatch,
        Name: "WATCH SERIES",
        discription:"The ultimate watch for a healthy life.",
        btn1:"Learn more",
        btn2:"Buy"
    },
    {
        image:mackbook2,
        Name: "MacBook",
        discription:"High performance with M4.",
        btn1:"Learn more",
        btn2:"Buy"
    },
    {
        image:airpod,
        Name: "AirPods Pro 3",
        discription:"The world's best in-ear Active Noise Cancellation.",
        btn1:"Learn more",
        btn2:"Buy"
    },
    {
        image:iphone,
        Name: "iPhone 15pro-max",
        discription:"Black Titanium ProMotion technology120Hz.",
        btn1:"Learn more",
        btn2:"Buy"
    },
    {
        image:ipad,
        Name: "iPad Pro",
        discription:"Advanced AI perfomance",
        btn1:"Learn more",
        btn2:"Buy"
    },
    {
        image:exchange,
        Name: "Trade In",
        discription:"Upgrade and save.it's that easy.",
        btn1:"Get your estimate",
        btn2:"Reg"
    },
]

const Product = () => {
  return (
    <>
        <div className='flex items-center justify-around flex-wrap mt-10'>
            {ProductData.map((data, index)=>(
                <div className='mt-2 space-y-10 space-x-20 '>
                    <div key={index} className='relative inline-block'>
                        <img className='w-[30vw] h-[30vw] ' src={data.image} alt="" />
                        <div className='absolute top-2 left-5 md:top-5 md:left-10 text-white'>
                        <h2 className='text-gray-500 text-[14px] md:text-2xl flex font-bold md:pb-0'><FaApple/>{data.Name}</h2>
                        <p className='text-white text-[12px] font-semibold md:text-2xl'>{data.discription}</p>
                        <div>
                            <button className='md:my-4 md:p-2 rounded-lg shadow-lg bg-blue-600 font-semibold hover:bg-blue-800 text-xs p-1 '>{data.btn1} </button>
                            <button className='bg-black md:m-4 md:p-2 rounded-xl border border-blue-400 md:font-bold px-1 m-1 font-semibold hover:bg-blue-600 '>{data.btn2}</button>
                        </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </>
  )
}

export default Product
