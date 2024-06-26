import React, { useEffect, useState }  from 'react'
import HoldingCard from '../../../components/HoldingCard'
import axios from 'axios'
import { useContext } from 'react'
import { AccessContext } from '../..'

import Link from 'next/link'


export default function Holding() {
    const token = useContext(AccessContext);
    
    const [PositionData , setPositionData] = useState("")
    let config = {
      method: 'get',
    maxBodyLength: Infinity,
      url: 'https://api.upstox.com/v2/pnl/long-term-holdings',
      headers: { 
        'Authorization' : `Bearer ${token}` , 
        'Accept': 'application/json'
      }
    };
    // setInterval(()=>{
      useEffect(()=>{

        console.log("req sent")
                axios(config)
          .then((response) => {
            setPositionData(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      } , [])
      
      
      
    // } , 7200)
      
    
 
  
  let pnl=0;



  return (
    <div className="flex flex-row">
    <div className='flex flex-col'>
     {PositionData.data?.map((stock)=>{
      pnl+=stock.pnl;
      return (<HoldingCard props={stock} />)
     }
    )}
    </div>
      <div className="flex flex-col">
        <span className='flex flex-col mt-10'>

        <p className='text-center font-sm]'>Net P/L</p>
        <p className={`text-sm m-auto ${pnl >0 ?"text-green-600" : "text-red-600"}`}>{"₹"+pnl.toFixed(2)}</p>
        </span>
        <Link className="bg-[#41246E] text-white w-full
         h-[40px] p-2 rounded-md transition-all m-auto text-sm active:bg-[#986bdb] hover:bg-[#6c48a3] text-center" href="https://pro.upstox.com/" >Open Upstox</Link>
      </div>
      
    </div>
  )
}
