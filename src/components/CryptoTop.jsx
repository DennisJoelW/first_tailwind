import React from 'react'
import btc_icon from "../assets/btc-logo.png"
import avax_icon from "../assets/avax.png"
import shiba_icon from "../assets/shiba.png"
import sol_icon from "../assets/sol.png"
import eth_icon from "../assets/eth.png"
import doge_icon from "../assets/doge.png"
import arrow from "../assets/right-arrow.png"

const CryptoTop = () => {

    function TopCoin({token, textColor}){
        return (
        <div className='flex justify-between mt-6 items-center mb-6'>
            <td className='text-start ml-1'>{token.id}</td>
            <img className ='w-[28px] h-[20px] pl-2' src={token.coinImage} alt="" />
            <td className=' w-3/6 text-start pl-2'>{token.coinName}</td>
            <td className={` w-2/6 text-right mr-2 text-[#45E8AA] ${textColor}`}>{token.coinPump}</td>
        </div>
        )
    }

    const coinGain = [
        {
            id: 1,
            coinImage : shiba_icon,
            coinName : "Shiba Inu",
            coinPump : "27.5%"
        },
        {
            id : 2,
            coinImage : avax_icon,
            coinName : "Avalanche",
            coinPump : "12.5%"
        },
        {
            id : 3,
            coinImage : btc_icon,
            coinName : "Bitcoin",
            coinPump : "8.5%"
        }
    ]

    const coinLoss = [
        {
            id: 1,
            coinImage : doge_icon,
            coinName : "Doge",
            coinPump : "17.5%"
        },
        {
            id : 2,
            coinImage : sol_icon,
            coinName : "Solana",
            coinPump : "9.4%"
        },
        {
            id : 3,
            coinImage : eth_icon,
            coinName : "Ethereum",
            coinPump : "4.5%"
        }
    ]


    function TopCategories(props){
        return(
        <div className=' m-1 p-4 bg-[#000300] rounded-xl'>

            <div className=' flex flex-row justify-between'>
                <h4 className=' text-xl'>{props.categories}</h4>

                <div className=' flex flex-row items-center cursor-pointer'>
                    <p className=' text-[15px] mr-2 text-[#1744A4] font-semibold'>More</p>
                    <img src={arrow} className=' w-[14px] h-[12px]' alt="" />
                </div>

            </div>


                {props.data && props.data.map(token => (<TopCoin token={token} textColor={props.textColor2} />))}
        </div>
        )
    }

  return (
    <div className='w-full md:h-[60vh] bg-[#191919] py-12'>
        <div className=' max-w-[1380px] h-full mx-auto flex text-white font-poppins md:flex-row flex-col'>

            <div className=' md:w-1/3 md:m-2 m-6'>
                <div className=' m-1 p-4 bg-[#000300] rounded-xl'>
                    <TopCategories 
                        categories = "Top Gainers"
                        data = {coinGain}
                    />
                </div>
            </div>

            <div className=' md:w-1/3 md:m-2 m-6'>
                <div className='  m-1 p-4 bg-[#000300] rounded-xl'>
                    <TopCategories 
                        categories = "Top Losers"
                        data={coinLoss}
                        textColor2 = "text-red-500"
                    />
                </div>
            </div>

            <div className=' md:w-1/3 md:m-2 m-6'>
                <div className='  m-1 p-4 bg-[#000300] rounded-xl'>
                    <TopCategories 
                        categories = "Top Volumes"
                        data = {coinGain}
                    />
                </div>
            </div>
            

        </div>
    </div>
  )
}

export default CryptoTop