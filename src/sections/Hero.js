import React from 'react'
import Btn from '../components/hero/Btn'
import Btn2 from '../components/hero/Btn2'
import Capcha from '../assets/CAPCHA.gif'

function Hero() {
  return (
    <div className='flex flex-col justify-center items-center'>
        
<div className="text">
<h1 className='text-center text-7xl lg:text-[150px]'>BOOOOMBERG</h1>
<h1 className='text-center text-9xl mt-[-50px] lg:text-[300px] lg:mt-[-107px] lg:mb-[-57px] mb-[-20px]'>COIN</h1>
<h2 className='text-center text-2xl lg:text-3xl'>The Wildest Ride in Finance </h2>
<h3 className='text-center text-2xl lg:text-3xl'>Wall Street's Wildest Nightmare! </h3>
</div>


<div className="btns">
<div className="btn flex flex-col lg:flex-row  justify-center items-center pt-10 ">

<Btn text={'BOOOOM NOW'}/>
<Btn2 text={'DEXTOOLS'}/>
<Btn text={'TELEGRAM'}/>

</div>

</div>

<div className="gif flex lg:flex-row flex-col">
    
<img src={Capcha} className='' alt="" />
<img src={Capcha} className='' alt="" />
<img src={Capcha} className='' alt="" />

</div>

    </div>
  )
}

export default Hero