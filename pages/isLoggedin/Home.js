import React, { useState } from 'react';
import Portfolio from './portfolio/Portfolio';
import Holding from './holding/Holding';


export default function Home() {
  const [active , setActive] = useState("holding");


  return (
    
    <div className="h-full ">
      
      <div className='bg-[#5A298B] flex flex-row justify-around w-full m-auto h-'>
        <button className="headerButton text-sm text-white p-3 tracking-widest" onClick={()=>{setActive("holding")}}>
    Holding
        </button>
        <button className="headerButton text-sm text-white p-3 tracking-widest" onClick={()=>{setActive("portfoliolist")}}>
    Portfolio
        </button>
      </div>
     <div className="bg-white">

      { active == "holding" ?<Holding/> : <Portfolio/>}
     </div>
      </div>
  );
}
