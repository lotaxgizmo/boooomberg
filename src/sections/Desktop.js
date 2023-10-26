/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Coin from "../assets/coin.png";

function Desktop() {
  return (
    <div className="hidden lg:flex justify-center items-center py-2 ">
      <div className="bg-black/10 backdrop-blur-3xl  border-[0.1px] border-[#FFEE55] rounded-xl flex justify-around items-center self-center w-[500px] h-14 px-3">
        <a href="https://www.boooomberg.xyz/">
          <img src={Coin} alt="" className="w-10 ml-3" />
        </a>
        <div className="rounded-xl flex justify-around items-center self-center w-96">
          <a href="https://www.boooomberg.xyz/" className="hover:text-whitel hover:text-xl">
            HOME
          </a>
          <a href="https://twitter.com/boooomberg" target="_blank" rel="noopener noreferrer" className="hover:text-whitel hover:text-xl">
            TWITTER
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-whitel hover:text-xl">
            DEXTOOLS
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-whitel hover:text-xl">
            TELEGRAM
          </a>
        </div>
      </div>
    </div>
  );
}

export default Desktop;
