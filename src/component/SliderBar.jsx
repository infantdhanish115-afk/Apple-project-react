import{useState, useEffect } from 'react'
import { GoCircle } from "react-icons/go";
import slider1 from '../assets/images/slider-1.jpg'
import slider2 from '../assets/images/slider-2.jpg'
import slider3 from '../assets/images/slider-3.jpg'
import slider4 from '../assets/images/slider-4.jpg'

const SliderBar = () => {
    const slide = [
        {
            type: "image",
            src: slider4
        },
        {
            type: "image",
            src: slider1
        },
        {
            type: "image",
            src: slider2
        },
        {
            type: "image",
            src: slider3
        },
    ];

    const [index, setIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % slide.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [slide.length])

    const goToslide = (i) => {
        setIndex(i);
    };
    return (
        <div className="relative bg-[#1D1D1F] pb-14 overflow-hidden">
            <div className="w-full overflow-hidden">
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${index * 100}%)` }}>

                    {slide.map((slide, i) => (
                        <div key={i} className="min-w-full flex justify-center">
                            {slide.type === "image" ? (
                                <img
                                    src={slide.src}
                                    className="w-full h-auto object-cover "
                                    alt="" />
                            ):null}
                        </div>
                    ))}
                </div>
            </div>


            <div className="flex space-x-3 items-center justify-center mt-6">
                {slide.map((_, i) => (
                    <GoCircle  
                        key={i}
                        className={`cursor-pointer text-lg ${index === i ? "text-white" : "text-gray-500"
                            }`}
                        onClick={() => goToslide(i)}
                    />
                ))}
            </div>
        </div>
    );
}


export default SliderBar
