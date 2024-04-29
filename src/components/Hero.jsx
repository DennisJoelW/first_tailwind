import React from 'react'
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className=' text-white flex items-center font-poppins'>
        <div className=' w-full max-w-[960px] flex flex-col text-center mx-auto justify-center md:h-[100vh] h-[60vh]'>
            <p className=' text-[#03C988] font-medium p-2 md:text-xl text-md'>DIVE INTO THE WORLD OF DeFi</p>
            <h1 className=' md:text-7xl sm:text-6xl text-4xl font-semibold md:py-3'>Grow with BlockChain</h1>
            <div className='flex flex-row justify-center items-center'>
                <p className=' md:text-3xl sm:text-2xl text-xl py-2'>Fast, Flexible Financing For</p>
                <ReactTyped strings={['BTC', "ETH", 'QNT']} typeSpeed={50} backSpeed={100} className='md:text-3xl sm:text-2xl text-xl ml-2 py-2 text-[#03C988]' loop/>
            </div>
            <p className='mt-2 md:text-2xl text-xl text-gray-600 font-semibold mx-3 '>Monitor your portfolio & stack SOL, BNB, BGB Platforms</p>
            <button className=' bg-gradient-to-r from-green-400 to-blue-500 max-w-fit rounded-md my-5 mx-auto py-4 px-5 md:text-2xl text-xl font-semibold text-black'>Invest Now</button>
        
        </div>
        
    </div>
  )
}

export default Hero