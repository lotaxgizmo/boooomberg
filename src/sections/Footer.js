import React from 'react'
import Coin from '../assets/coin.png'


function Footer() {
    return (
        <div className='h-1d0 border-t-[1px] mt-36 mb-2 border-[#FFEE55]  flex flex-col justify-center align-middle items-center absodlute bottom-2'>
            <img src={Coin} alt="" className='w-32 ml-3 mt-10' />
            <div className='flex lg:flex-row flex-col justify-between w-full lg:px-10'>
                <h3 className='text-center text-2xl lg:text-3xl'>Booomberg © 2023</h3>
                <h3 className='text-center text-2xl lg:text-3xl'>Contract 0xsjn4jk34nk3j4k344jnk343nk</h3>
            </div>


        </div>
    )
}

export default Footer