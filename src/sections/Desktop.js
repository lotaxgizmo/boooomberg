/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Coin from '../assets/coin.png'

function Desktop() {
  return (
    <div className='hidden lg:flex justify-center items-center py-2 '>
      <div className='bg-black border-2 border-[#FFEE55] rounded-xl flex justify-around items-center self-center w-[500px] h-14 px-3'>
      <img src={Coin} alt="" className='w-10 ml-3' />
        <div className="rounded-xl flex justify-around items-center self-center w-96">
        <a href="#" className='hover:text-whitel hover:text-xl'>HOME</a>
        <a href="#" className='hover:text-whitel hover:text-xl'>ABOUT</a>
        <a href="#" className='hover:text-whitel hover:text-xl'>DEXTOOLS</a>
        <a href="#" className='hover:text-whitel hover:text-xl'>TELEGRAM</a>
        </div>
      </div>
    </div>
  )
}

export default Desktop