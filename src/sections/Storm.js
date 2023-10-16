import React from 'react'
import door from '../assets/door.gif'
import Btn from '../components/hero/Btn'

function Storm() {
  return (
    <div className='my-10 flex flex-col lg:flex-row justify-center items-center'>
    <div className='flex flex-col items-start justify-start'>
       <p className='text-left text-3xl lg:text-5xl  z-10 border-2 border-l-[20px] border-[#FFEE55] px-4
       hover:border-l-[30px] transition-all '>THE STORM OF LAUGHTER </p>
       <p className='text-left text-2xl lg:text-3xl lg:w-[800px]  py-7 z-10'>
       Prepare for the storm of laughter as Boooomberg Coin sweeps through the financial district, leaving brokers in stitches and traders rolling on the trading floor!
       </p>
       
<Btn text={'BOOOOM NOW'}/>
   </div>
   <img src={door} alt="" />
  </div>
  )
}

export default Storm