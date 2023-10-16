import React from 'react'

function Header() {
  return (
    <div className='flex justify-center items-center py-2'>
        <div className='border-2 border-[#FFEE55] rounded-xl flex justify-around items-center self-center w-96 h-14'>
        <a href="#" className='hover:text-whitel hover:text-xl'>HOME</a>
        <a href="#" className='hover:text-whitel hover:text-xl'>ABOUT</a>
        <a href="#" className='hover:text-whitel hover:text-xl'>DEXTOOLS</a>
        <a href="#" className='hover:text-whitel hover:text-xl'>TELEGRAM</a>
    </div>
    </div>
  )
}

export default Header