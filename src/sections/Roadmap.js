import React from "react";
import PHASE1 from '../assets/PHASE1.svg'
import PHASE2 from '../assets/PHASE2.svg'
import PHASE3 from '../assets/PHASE3.svg'

function Roadmap() {
  return (
    <div className="my-10 flex flex-col lg:flex-col justify-center items-center " id="Roadmap"  >
      <p
        className="text-center text-3xl lg:text-7xl  z-10 border-2 border-l-[20px] border-[#FFEE55] px-4
       hover:border-l-[30px] transition-all mb-24"
      >
        ROADMAP
      </p>


      <div className="roadmap flex flex-col items-stdart w-full">
        <img src={PHASE1} alt="" className="self-start my-10" />
        <img src={PHASE2} alt="" className="self-end my-10" />
        <img src={PHASE3} alt="" className="self-start my-10" />
      </div>
    </div>
  );
}

export default Roadmap;
