import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import HeroSection from './component/HeroSection'
import HeroSection2 from './component/HeroSection2'
import Product from './component/Product'
import SliderBar from './component/SliderBar'
import Footer from './component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <HeroSection/>
      <HeroSection2/>
      <Product/>
      <SliderBar/>
      <Footer/>
    </>
  )
}

export default App
