import React from 'react'
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { MdOutlineEmail } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <div className=' w-full bg-[#191919] pt-16 md:px-0 px-12 md:h-fit h-fit justify-center flex flex-col'>
        <div className=' max-w-[1080px] w-full mx-auto flex md:flex-col h-full flex-col items-center justify-center text-white font-poppins'>
          <div className='items-center justify-center flex flex-col text-center'>
            <h2 className=' text-4xl font-bold mb-3'>Nova</h2>
            <p className=' text-gray-400 mb-3'>This website is part of my portfolio project and is created using ReactJS and Tailwind CSS. <br /> Donec malesuada luctus mauris vulputate congue.</p>
            <hr className="w-full border-t mb-8 border-gray-300 " />

            <div className=' flex flex-row gap-6 items-center justify-center'>
              <a href="mailto:dennisjoelw@gmail.com"> <MdOutlineEmail size={34} className=' cursor-pointer'/> </a>
              <a href="https://github.com/dennisjoelw"><FiGithub size={30} className=' cursor-pointer' /></a>
              <a href="https://linkedin.com/in/dennis-joel"><CiLinkedin size={34} className=' cursor-pointer' /></a>
              <SlSocialInstagram size={30} className=' cursor-pointer' />
              <SlSocialTwitter size={30} className=' cursor-pointer'/>
            </div>
          </div>

        </div>

        <div className=' bg-black w-full h-[8vh] mt-16 text-white font-poppins text-center items-center justify-center flex'>
            <h2 className=' text-gray-400'>© 2024 | Designed by Dennis Joel. All rights Reserved</h2>
        </div>

    </div>
  )
}

export default Footer