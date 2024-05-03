import React, {useState} from 'react'
import btc_icon from "../assets/btc-logo.png"
import '../global.css'

const Trade = () => {

    const [buy,setBuy] = useState(true)
    const [sell,setSell] = useState(false)
    const [trade,setTrade] = useState(false)

    const [buttonOptions, setButtonOptions] = useState("Buy")

    function buyClicked(){
        setBuy(true)
        setSell(false)
        setTrade(false)
        setButtonOptions("Buy")
    }
    function sellClicked(){
        setBuy(false)
        setSell(true)
        setTrade(false)
        setButtonOptions("Sell")
    }
    function tradeClicked(){
        setBuy(false)
        setSell(false)
        setButtonOptions("Trade")
        setTrade(true)
    }

    function ThreeBtnOptions() {
        return (
            <div className='flex flex-row bg-[#000300] px-5 py-3 rounded-xl justify-between'>
                <button className={`${buy ? 'bg-[#03C988] text-black':'bg-[#000300]'} md:px-6 md:py-[0.6rem] px-3 py-2 rounded-md font-medium`} onClick={buyClicked}>Buy</button>
                <button className={`${sell ? 'bg-[#03C988] text-black':'bg-[#000300]'} md:px-6 md:py-[0.6rem] px-3 py-2 rounded-md font-medium`} onClick={sellClicked}>Sell</button>
                <button className={`${trade ? 'bg-[#03C988] text-black':''} md:px-6 md:py-[0.6rem] px-3 py-2 rounded-md font-medium`} onClick={tradeClicked}>Trade</button>
            </div>
        );
    };

    function SelectCoin(){
        return(
            <div class="relative text-left ">
                    <button type="button" class="flex w-full flex-row gap-x-1.5 rounded-md  pl-16 py-[1.4rem] text-sm font-semibold bg-[#000300] text-white " id="menu-button" aria-expanded="true" aria-haspopup="true">
                    Bitcoin     
                        <svg className="h-5 w-5 mr-6 text-gray-400 absolute right-0 " viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                        </svg>
                        <span className=' absolute inset-y-0 left-0 items-center ml-6 top-[19px]'><img src={btc_icon} alt="" width={24}/></span>
                    </button>
            </div>
        )
    }

    function Amount() {
        return(
            <div class="relative text-left ">
                <input type="text" id="last_name" className=" text-gray-900 text-sm rounded-md  block w-full p-5 dark:bg-[#000300] dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-medium font-poppins" placeholder="$1,945.17 "/>
                <span className="absolute inset-y-0 right-0 mr-12 flex items-center pr-2.5 text-[#03C988] cursor-pointer font-poppins font-semibold">USD</span>    
                            <svg className="h-5 w-5 mr-6 text-gray-400 absolute right-0 top-[1.30rem] cursor-pointer" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                            </svg>
            </div>
        )
    }

    function TextBuySell() {
        return(
        <div className='flex flex-col py-8 w-full gap-3 mx-auto'>
            <h3 className=' lg:text-7xl md:text-5xl text-5xl font-semibold gradient-text'>Buy & Sell.</h3>
            <h3 className=' lg:text-7xl md:text-5xl text-5xl font-semibold gradient-text'>Trade.</h3>
            <h3 className=' lg:text-7xl md:text-5xl text-5xl font-semibold gradient-text'>Everywhere.</h3>
        </div>
        )
    }

  return (
    <div className=' w-full py-16 md:px-6 px-12 md:h-fit h-fit font-poppins mt-8 mb-8 items-center justify-center'>
        <div className=' max-w-[1080px] mx-auto flex md:flex-row flex-col text-white items-center justify-center'>
            
            <div className=' md:w-1/2 w-full bg-[#191919] flex flex-col rounded-2xl md:px-16 md:py-8 py-4 px-4 lg:mr-8 md:mr-6 mb-16 h-full'>
                <div className='flex flex-col py-8 w-full mx-auto'>

                    <ThreeBtnOptions />

                    <p className=' ml-1 mt-6 mb-2'>Coin</p>

                    <SelectCoin />

                    <p className=' ml-1 mt-6 mb-2'>Amount</p>
                    <Amount />

                        <div className='flex justify-between mt-10 px-[3px]'>
                            <h3>Total : </h3>
                            <h3 className=' text-gray-400 font-poppins font-semibold'>$1,945.17</h3>
                        </div>

                        <button className=' mt-10 bg-[#03C988] hover:bg-[hsl(160,97%,46%)] text-black active:bg-[hsl(160,97%,50%)] py-4 rounded-lg text-[18px] font-semibold font-poppins'>
                            {buttonOptions}
                        </button>

                </div>
            </div>

            <div className=' md:w-1/2 w-full flex flex-col justify-center items-center h-fit rounded-2xl px-4 lg:ml-8 md:ml-6 md:mt-[-70px]'>
                <TextBuySell />
            </div>
            
        </div>
    </div>
  )
}

export default Trade