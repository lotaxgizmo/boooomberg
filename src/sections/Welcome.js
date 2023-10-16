import React from 'react'
import middleface from '../assets/middleface.gif'
import smallface from '../assets/smallface.gif'
import naut from '../assets/naut.gif'
import coingif from '../assets/coingif.gif'

function Welcome() {
    return (
        <div className='flex flex-col justify-center items-center'>

           <div className='mb-10 lg:mb-32 '>
           <h3 className='text-left text-5xl lg:text-6xl mb-4 lg:mb-0'>WELCOME TO THE INSANITY </h3>
            <h3 className='text-left text-2xl lg:text-3xl lg:w-[1000px]'>Step into the madness of Wall Street with Boooomberg Coin, where our charts are crazier than a bull in a china shop and chaos reigns supreme! </h3>
            

            <div className="img relative">
                <div className='flex flex-col justify-center items-center align-middle mt-20 relative'>
                    <img src={middleface} alt="" className='w-52 lg:w-[500px]' />
                    <img src={smallface} alt="" className='w-20 lg:w-32 absolute left-10 top-[-40px]' />
                    <img src={smallface} alt="" className='w-20 lg:w-32 absolute right-10 bottom-[-40px]' />

                </div>
                <img src={naut} alt="" className='w-96 lg:w-[500px] lg:absolute left-[-200px] bottom-0  lg:ml-0 lg:m-[-200px] m-[-30px]
                ' />
            </div>
           </div>


<div className="charges flex flex-col justify-center items-center w-full bg-[#FFEE55] border-2 border-white relative">
<p className='text-center text-2xl lg:text-3xl lg:w-[1000px] text-black py-7 z-10'>No Hidden Charges, No Nonsense !!!: We believe in a level playing field for all. Keep 100% of your gains with ZERO taxes! Security is our top priority with a renounced LP contract. Dive into the wildest ride in crypto - it's meme magic!</p>
    <img src={coingif} alt="" className='absolute mix-blend-multiply' />
</div>

        </div>
    )
}

export default Welcome