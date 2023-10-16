import React from 'react'
import start1 from '../assets/start1.svg'
import start2 from '../assets/start2.svg'
import start3 from '../assets/start3.svg'
import start4 from '../assets/start4.svg'

function Quick() {
  return (
    <div className='flex flex-col  justify-start items-center mt-20'>
           <p className='text-center text-5xl lg:text-9xl  z-10 border-2 border-l-[20px] border-[#FFEE55] px-4
       hover:border-l-[30px] transition-all '>QUICK START GUIDE</p>
       <div className="imgs flex flex-col lg:flex-row  justify-center items-start mt-20">
        <img src={start1} alt="" className='p-1 w-80' />
        <img src={start2} alt="" className='p-1 w-80' />
        <img src={start3} alt="" className='p-1 w-80' />
        <img src={start4} alt="" className='p-1 w-80' />
       </div>
    </div>
  )
}

export default Quick