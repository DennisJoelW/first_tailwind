import React, {memo, useState} from 'react'
import {HiOutlineMenuAlt3, HiOutlineMenu  } from 'react-icons/hi'
import { IoMdClose } from "react-icons/io";

const Navbar = () => {

  const[menu, changeMenu] = useState(false)

  const openMenu = () => {
    changeMenu(true)
  }
  const closeMenu = () => {
    changeMenu(false)
  }

  return (
    <div className='text-white flex justify-between items-center h-24 max-w-7xl mx-auto px-4 pt-4'>
        <h1 className='w-full lg:text-5xl md:text-5xl font-semibold text-[#03C988] font-poppins text-2xl cursor-pointer'>TELWIN</h1>
        <ul className='hidden md:flex font-poppins '>
          <li className=' p-4  cursor-pointer whitespace-nowrap hover:text-[#03C988] ease-in-out duration-300'>Buy Crypto</li>
          <li className=' p-4 cursor-pointer whitespace-nowrap hover:text-[#03C988] ease-in-out duration-300'>Market</li>
          <button className=' p-4 hover:text-[#03C988] ease-in-out duration-300'>Login</button>
          <button className='px-4 whitespace-nowrap border-[1px] border-[#03C988] hover:text-black hover:bg-[#03C988] ease-in-out duration-400 rounded-sm font-medium '>Sign Up</button>
        </ul>

        <div className=' block md:hidden'>
          {menu ? <IoMdClose size={24} className=' cursor-pointer' onClick={closeMenu}/> :<HiOutlineMenu size={24} onClick={openMenu} className=' cursor-pointer'/>}
        </div>

        <div className={menu ? "fixed left-0 top-0 w-[60%] border-r border-r-gray-700 border-b border-b-gray-700 h-full bg-zinc-950 ease-linear duration-300 block md:hidden" : " fixed left-[-100%]"}>
        <h1 className='w-full text-4xl font-semibold text-[#03C988] m-4 mt-10 font-poppins'>TELWIN</h1>
          <ul className='mt-10 font-poppins'>
            <li className=' p-4 font-[16px] cursor-pointer whitespace-nowrap hover:text-[#03C988] ease-in-out duration-300'>Buy Crypto</li>
            <li className=' p-4 font-[16px] cursor-pointer whitespace-nowrap hover:text-[#03C988] ease-in-out duration-300'>Market</li>
            <button className=' font-[16px] p-4 hover:text-[#03C988] ease-in-out duration-300 block'>Login</button>
            <button className=' font-[16px] p-4 whitespace-nowrap hover:text-[#03C988] ease-in-out duration-300'>Sign Up</button>
          </ul>
        </div>


    </div>
  )
}

export default Navbar