import React from 'react'
import crystal from '../assets/crystal.gif'
import Btn from '../components/hero/Btn'

function Tokenomics() {
  return (
    <div className='my-10 flex flex-col lg:flex-row justify-center items-center bg-resd-400'>
      <div className='flex flex-col items-center justify-center'>
        <p className='text-center text-3xl lg:text-7xl  z-10 border-2 border-l-[20px] border-[#FFEE55] px-4
       hover:border-l-[30px] transition-all '>TOKENOMICS TO MAKE YOU GO BONKERS </p>
        <p className='text-center text-2xl lg:text-3xl lg:w-[800px] pt-2 py-1 z-10'>
          Token Name: BOOOOMBERG
        </p>
        <p className='text-center text-2xl lg:text-3xl lg:w-[800px] pt-2 py-1 z-10'>
          Token Symbol: $BOOOOM
        </p>
        <p className='text-center text-2xl lg:text-3xl lg:w-[800px] pt-2 py-1 z-10'>
          Total Supply: 100,000,000,000,000 $BOOOOM
        </p>
        <p className='text-center text-2xl lg:text-3xl lg:w-[800px] pt-2 py-1 z-10'>
          Tokens For Presale: 16,000,000,000,000 $BOOOOM
        </p>
        <p className='text-center text-2xl lg:text-3xl lg:w-[800px] pt-2 py-1 z-10'>
          Tokens For Liquidity: 7,752,000,000,000 $BOOOOM
        </p>
        <p className='text-center text-2xl lg:text-3xl lg:w-[800px]  py-1 z-10'>
          70% of tokens were shot into space, never to return.
        </p>
        <p className='text-center text-2xl lg:text-3xl lg:w-[800px]  py-1 z-10'>
          The remaining 30% is hidden in a vault guarded by finance clowns.
        </p>
        <img src={crystal} alt="" />



        <p className='text-center text-3xl lg:text-5xl  z-10 border-2 border-l-[20px] border-[#FFEE55] px-4
       hover:border-l-[30px] transition-all '>LAUGH YOUR WAY TO RICHES </p>
        <p className='text-center text-2xl lg:text-3xl lg:w-[800px] pt-2 py-1 z-10'>
          Say goodbye to Pepe and hello to Boooomberg! We've unleashed the ultimate meme coin, where hilarity meets crypto. It's time for the finance world to lighten up!
        </p>
        <div className='border-2 border-[#FFEE55] mt-10'>
          <p className='text-center text-3xl lg:text-5xl bg-[#FFEE55] text-black z-10 border-2 border-r-[20px] border-black px-4
       hover:border-r-[30px] transition-all'>BOOM-PROOF YOUR INVESTMENTS </p>
        </div>
        <p className='text-center text-2xl lg:text-3xl lg:w-[800px] pt-2 py-1 z-10'>
          Forget taxes and presales! Boooomberg Coin guarantees a level playing field for all crypto adventurers. Keep 100% of your gains, and our LP contract is so renounced it's doing stand-up comedy! Dive into the chaos - it's insane and legit
        </p>
      </div>


    </div>
  )
}

export default Tokenomics