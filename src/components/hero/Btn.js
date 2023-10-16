import React from 'react';

function Btn({ text }) {
  return (
    <div className='my-4 border-2 border-[#FFEE55] w-80 min-w-80 h-14 lg:h-16 lg:w-56 mx-3
    flex flex-col items-center transition-all justify-center text-3xl hover:bg-[#FFEE55] hover:text-black :'>
      <p className='px-2'>{text}</p>
    </div>
  );
}

export default Btn;
