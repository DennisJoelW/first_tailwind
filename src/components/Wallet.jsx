import React from 'react'
import solana_icon from '../assets/solana.webp'
import qnt_icon from '../assets/qnt.webp'
import render from '../assets/render.webp'

const Wallet = () => {

  const CryptoCard = ({ bgGradient, image, title, description, imgSize, marginTop }) => {
    return (
      <div className={`lg:w-1/3 md:w-full ${bgGradient} w-full flex justify-center items-center text-center rounded-3xl transition-transform duration-300 hover:translate-y-3`}>
        <div className='flex items-center flex-col cursor-pointer h-full'>
          <img src={image} alt="" className=' lg:w-[230px] md:w-[140px] w-[130px] mt-4 '/>
          <h3 className='font-poppins font-semibold text-4xl text-white mt-[15px]'>{title}</h3>
          <p className='text-center mx-7 text-white md:mt-4 md:mb-10 mt-2 mb-8 font-poppins font-medium'>{description}</p>
        </div>
      </div>
    );
  };

  return (
    <div className=' w-full bg-[#191919] py-16 md:px-6 px-12 md:h-[100vh]'>
      <h2 className='  text-center text-white font-bold font-poppins mb-10 mt-[-20px] text-4xl'>POPULAR TOKENS</h2>
      <div className='max-w-[1080px] mx-auto flex md:flex-row flex-col gap-16'>


        <CryptoCard 
          bgGradient=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          image={render}
          imgSize="240px"
          title="RNDR"
          description="The Render Network® Provides Near Unlimited Decentralized GPU Computing Power For Next Generation 3D Content Creation."
        />
        
        <CryptoCard 
          bgGradient=" bg-gradient-to-r from-indigo-400 to-cyan-500"
          image={solana_icon}
          imgSize="250px"
          title="SOL"
          description="Get big, quick. Solana is made to handle thousands of transactions per second, and fees for both developers and users remain less than $0.0025."
        />

        <CryptoCard 
          bgGradient=" bg-gradient-to-r from-green-400 to-blue-500"
          image={qnt_icon}
          imgSize="240px"
          title="QNT"
          description="Assets of all kinds, from currencies to carbon credits, are being tokenised on blockchain. Unlocking benefits for all."
        />

      </div>
    </div>
  )
}

export default Wallet