/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Hamburger from '../assets/Hamburger.svg'
import { useState } from 'react'

function Mobile() {
  const [isMax, setIsMax] = useState(false); // Initialize isMax state as false

  const toggleHeight = () => {
    setIsMax((prevIsMax) => !prevIsMax); // Toggle the state value between true and false
  };

  const minHeight = 'h-14 items-center justify-center ';
  const maxHeight = 'h-96 items-top justify-start bg-black';

  const showmenu = 'flex';
  const hidemenu = 'hidden';

  return (

    <div className='my-3 mb-6 lg:hidden flex flex-col justify-center items-center py-2 border-2 border-[#FFEE55] rounded-xl w-72 bg-black'>
      <div onClick={toggleHeight} className='pt-5'>
        <img src={Hamburger} alt="" className='bg-whitde w-10s self-startd' />
      </div>
      <div className="flex justify-center items-center py-2">
        <div className={`${isMax ? maxHeight : minHeight} rounded-xl flex flex-col justify-around  self-center ws-96 h-56 ${isMax ? showmenu : hidemenu}`}>
          <a href="#" className='hover:text-whitel text-left text-5xl hover:text-xl'>HOME</a>
          <a href="#" className='hover:text-whitel text-left text-5xl hover:text-xl'>ABOUT</a>
          <a href="#" className='hover:text-whitel text-left text-5xl hover:text-xl'>DEXTOOLS</a>
          <a href="#" className='hover:text-whitel text-left text-5xl hover:text-xl'>TELEGRAM</a>
        </div>
      </div>
    </div>
  )
}

export default Mobile