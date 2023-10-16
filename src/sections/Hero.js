import React from 'react'
import Btn from '../components/hero/Btn'

function Hero() {
  return (
    <div className='flex flex-col justify-center items-center'>
        
<div className="text">
<h1 className='text-center text-7xl lg:text-[150px]'>BOOOOMBERG</h1>
<h1 className='text-center text-9xl mt-[-50px] lg:text-[300px] lg:mt-[-107px] lg:mb-[-57px] mb-[-20px]'>COIN</h1>
<h1 className='text-center text-2xl lg:text-3xl'>The Wildest Ride in Finance </h1>
<h1 className='text-center text-2xl lg:text-3xl'>Wall Street's Wildest Nightmare! </h1>
</div>


<div className="btn flex flex-col justify-center items-center py-10 ">

<Btn text={'BOOOOM NOW'}/>

</div>

    </div>
  )
}

export default Hero