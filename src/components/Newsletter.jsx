import React from 'react'

const Newsletter = () => {
  return (
    <div className=' w-full bg-[#000300] py-16 md:px-12 px-12 md:h-[80vh] h-fit flex flex-col items-center'>
        <div className=' max-w-[1080px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full flex flex-col items-center font-poppins text-black py-16 px-10 rounded-2xl'>
            <h2 className=' text-xl uppercase'>Subscribe</h2>
            <h2 className=' md:text-7xl text-5xl my-6 font-bold'>Newsletter</h2>
        
            <h3 className=' text-center md:text-xl text-[16px] mb-6'>Subscribe to our newsletter to get the latest updates on new <br />listing tokens and the latest crypto news.</h3>
            
            <div className=' flex md:flex-row flex-col items-center justify-center'>
              <input type="text" id="last_name" className=" md:w-[350px] text-sm rounded-l-xl p-5 bg-transparent dark:text-white font-medium font-poppins border-[1px] border-black placeholder:text-grey-950 " placeholder="youremail@gmail.com "/>
              <button className=' text-center px-6 py-4 bg-black text-white h-full rounded-r-xl md:mt-0 mt-2'>Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default Newsletter