import React from 'react';

function Btn({ text }) {
  return (
    <div className='border-2 border-[#FFEE55] w-20 
    flex flex-col items-center text-2xl'>
      {text}
    </div>
  );
}

export default Btn;
