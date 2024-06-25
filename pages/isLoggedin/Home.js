import React, { useState } from 'react';
import Positions from './positions/positions';
import Watch from './watch/watch';
import wave from "../../public/wave.svg"


export default function Home() {
  const [active , setActive] = useState("positions");


  return (
    
    <div className="h-full ">
      
      <div className='bg-[#5A298B] flex flex-row justify-around w-full m-auto h-'>
        <button className="headerButton text-sm text-white p-3 tracking-widest" onClick={()=>{setActive("positions")}}>
    Positions
        </button>
        <button className="headerButton text-sm text-white p-3 tracking-widest" onClick={()=>{setActive("watchlist")}}>
    Watchlist
        </button>
      </div>
     <div className="bg-white">

      { active == "positions" ?<Positions/> : <Watch/>}
     </div>
      </div>
  );
}
