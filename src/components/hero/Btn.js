import React from 'react';

function Btn({ text }) {
  return (
    <div className='border-2 border-[#FFEE55] min-w-32 h-14 
    flex flex-col items-center  justify-center text-3xl'>
      <p className='px-2'>{text}</p>
    </div>
  );
}

export default Btn;
