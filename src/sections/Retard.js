import React from 'react'
import Chart from '../assets/chart.gif'
import Btn from '../components/hero/Btn'

function Retard() {
  return (
   <div className='my-10 flex flex-col lg:flex-row justify-center items-center'>
     <div className='flex flex-col items-start justify-start'>
        <p className='text-left text-3xl lg:text-5xl  z-10 border-2 border-l-[20px] border-[#FFEE55] px-4
        hover:border-l-[30px] transition-all '>RETARDED CHARTS THAT DEFY LOGIC </p>
        <p className='text-left text-2xl lg:text-3xl lg:w-[800px]  py-7 z-10'>
        Our charts are so wild, they make a rollercoaster look like a kiddie ride! Hold on tight as you navigate through the most absurd financial visuals ever seen.
        </p>
        
<Btn text={'BOOOOM NOW'}/>
    </div>
    <img src={Chart} alt="" />
   </div>
  )
}

export default Retard