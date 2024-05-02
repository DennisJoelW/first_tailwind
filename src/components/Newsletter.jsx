import React from 'react'

const Newsletter = () => {
  return (
    <div className=' w-full bg-[#000300] py-16 md:px-12 px-12 md:h-[80vh] h-fit flex flex-col items-center'>
        <div className=' max-w-[1080px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full flex flex-col items-center font-poppins text-black p-10 rounded-lg'>
            <h2 className=' text-xl uppercase'>Subscribe</h2>
            <h2 className=' text-7xl my-8 font-bold'>Newsletter</h2>
            <h3 className=' text-center'>Subscribe to our newsletter to get the latest updates on new <br />listing tokens and the latest crypto news.</h3>
        </div>
    </div>
  )
}

export default Newsletter