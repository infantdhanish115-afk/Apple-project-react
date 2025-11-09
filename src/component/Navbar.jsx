import React from 'react'
import { FaApple } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";

const Navbar = () => {
    return (
        <>
            <div className=" flex items-center justify-center space-x-10 p-3 bg-[#000000] text-[#A0A0A0]">
                <h1 className='text-xl'><FaApple /></h1>
                <ul className="hidden md:flex items-center justify-center space-x-8 text-xs font-semibold">
                    <li><a href=""></a>Store</li>
                    <li><a href=""></a>Mac</li>
                    <li><a href=""></a>iPad</li>
                    <li><a href=""></a>iPhone</li>
                    <li><a href=""></a>Watch</li>
                    <li><a href=""></a>AirPods</li>
                    <li><a href=""></a>Entertainment</li>
                    <li><a href=""></a>Accessories</li>
                    <li><a href=""></a>Support</li>
                </ul>
                <h1 className="text-[14px]"><FaSearch/></h1>
                <h1 className="text-[14px]"><FaShoppingBag/></h1>

            </div>
            
            <div className="bg-[#1D1D1F] p-4 text-white ">
                <p className="text-center text-[7px] md:text-[14px] flex items-center justify-center">Get ₹5000 instant cashback on iPhone 17 Pro with eligible cards. Plus up to 6 months of No Cost EMI.  Buy </p>
            </div>

        </>
    )
}

export default Navbar
