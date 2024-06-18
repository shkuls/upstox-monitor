import React, { useState } from 'react';
import Positions from './positions/positions';
import Watch from './watch/watch';


export default function Home() {
  const [active , setActive] = useState("positions");


  return (
    
    <div className="h-full bg-yellow-400">
      <div className='bg-white flex flex-row justify-around w-full m-auto'>
        <button onClick={()=>{setActive("positions")}}>
    Positions
        </button>
        <button onClick={()=>{setActive("watchlist")}}>
    Watchlist
        </button>
      </div>
      { active == "positions" ?<Positions/> : <Watch/>}
      </div>
  );
}
