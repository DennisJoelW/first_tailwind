import React, {useState} from 'react'
import btc_icon from "../assets/btc-logo.png"

const Trade = () => {

    const [buy,setBuy] = useState(true)
    const [sell,setSell] = useState(false)
    const [trade,setTrade] = useState(false)

    function buyClicked(){
        setBuy(true)
        setSell(false)
        setTrade(false)
    }
    function sellClicked(){
        setBuy(false)
        setSell(true)
        setTrade(false)
    }
    function tradeClicked(){
        setBuy(false)
        setSell(false)
        setTrade(true)
    }

    const TradeInput = (props) => {
        return(
            <div>
            <label className="mb-1 block font-medium text-2xl text-gray-900 dark:text-white font-poppins">Amount</label>
            <div className="relative">
                <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={props.cryptoAmount}/>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2.5 text-[#03C988] cursor-pointer mr-2 font-poppins font-semibold">MAX</span>
            </div>
            </div>
        );
        
    };

  return (
    <div className=' w-full py-16 md:px-6 px-12 md:h-[100vh] font-poppins mt-8'>
        <div className=' max-w-[1080px] mx-auto flex md:flex-row flex-col text-white gap-20'>
            
        <div className=' md:w-1/2  bg-[#191919] flex flex-col justify-center items-center rounded-2xl px-16'>
            <div className='flex flex-col py-8 w-full'>

                <div className='flex flex-row bg-[#000300] px-3 py-3 rounded-xl justify-between'>
                    <button className={`${buy ? 'bg-[#03C988]':'bg-[#000300]'} px-6 py-3 rounded-md font-medium`} onClick={buyClicked}>Buy</button>
                    <button className={`${sell ? 'bg-[#03C988]':'bg-[#000300]'} px-6 py-3 rounded-md font-medium`} onClick={sellClicked}>Sell</button>
                    <button className={`${trade ? 'bg-[#03C988]':'bg-[#000300]'} px-6 py-3 rounded-md font-medium`} onClick={tradeClicked}>Trade</button>
                </div>

                    <p className=' ml-1 mt-6 mb-2'>Coin</p>
                    <div class="relative text-left ">
                            <button type="button" class="flex flex-row w-full gap-x-1.5 rounded-md  pl-16 py-[1.4rem] text-sm font-semibold bg-[#000300] text-white " id="menu-button" aria-expanded="true" aria-haspopup="true">
                            Bitcoin     
                                <svg className="h-5 w-5 mr-6 text-gray-400 absolute right-0 " viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                </svg>
                                <span className=' absolute inset-y-0 left-0 items-center ml-6 top-[19px]'><img src={btc_icon} alt="" width={24}/></span>
                            </button>
                    </div>
            </div>
        </div>

        </div>
    </div>
  )
}

export default Trade