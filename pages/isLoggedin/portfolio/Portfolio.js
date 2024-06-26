import React from 'react'
import { useContext , useState , useEffect} from 'react'
import { AccessContext } from '../..'
import axios from 'axios';


export default function Portfolio() {
  const token = useContext(AccessContext);
  const [PositionData , setPositionData] = useState("")
  let config = {
    method: 'get',
  maxBodyLength: Infinity,
    url: 'https://api.upstox.com/v2/portfolio/long-term-holdings',
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
    
  


let portfolio=0;
let investedPortfolio =0;
let totalPnl =0;
  return (
    <div >
    
    <div className=" flex flex-row ">
    <span className='flex flex-col flex-auto border rounded-xl m-3'>
          <h1 className='text-[12px] text-center'> 
          {"Total Portfolio"}
          </h1>
          <h1 className='text-md text-center'> 
          {"stock"}
          </h1>
    
    </span>
    <span className='flex flex-col flex-auto border rounded-xl m-3'>
          <h1 className='text-[12px] text-center'> 
          {"Invested Amount"}
          </h1>
          <h1 className='text-md text-center'> 
          {"stock"}
          </h1>
    
    </span>

    </div>
    
    
    <span className='flex flex-col  border rounded-xl m-3'>

        <p className='text-center font-sm'>Net P/L</p>
        <p className={`text-sm m-auto ${portfolio >0 ?"text-green-600" : "text-red-600"}`}>{"₹"+portfolio.toFixed(2)}</p>
        </span>
   
   
        </div>
      )
  
}
