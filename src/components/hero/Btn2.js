import React from 'react'

function Btn2({text}) {
  return (
    <div className='my-4 border-2 border-[#FFEE55] w-80 min-w-80 h-14 lg:h-16 lg:w-56 mx-3
    flex flex-col items-center  justify-center text-3xl text-black bg-[#FFEE55] hover:bg-black hover:text-[#FFEE55] :'>
      <p className='px-2'>{text}</p>
    </div>
  )
}

export default Btn2