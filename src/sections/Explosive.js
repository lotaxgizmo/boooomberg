import React from 'react'
import rainbow from '../assets/rainbow.gif'
import Btn2 from '../components/hero/Btn2'

function Explosive() {
  return (
    <div className='my-10 flex flex-col lg:flex-row-reverse justify-center items-center'>
    <div className='flex flex-col items-end justify-end'>
       <div className='border-2 border-[#FFEE55]'>
       <p className='text-right text-3xl lg:text-5xl bg-[#FFEE55] text-black z-10 border-2 border-r-[20px] border-black px-4
       hover:border-r-[30px] transition-all '>EXPLOSIVE BLOOMBERG TERMINAL CARICATURES </p>
       </div>
       <p className='text-right text-2xl lg:text-3xl lg:w-[800px]  py-7 z-10'>
       Prepare for the storm of laughter as Boooomberg Coin sweeps through the financial district, leaving brokers in stitches and traders rolling on the trading floor!
       </p>
       
<Btn2 text={'BOOOOM NOW'}/>
   </div>
   <img src={rainbow} alt="" />
  </div>
  )
}

export default Explosive