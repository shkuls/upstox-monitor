import React, { useEffect, useState }  from 'react'
import HoldingCard from '../../../components/HoldingCard'
import axios from 'axios'
import { useContext } from 'react'
import { AccessContext } from '../..'



export default function Positions() {
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
    setInterval(()=>{
      axios(config)
.then((response) => {
  setPositionData(response.data);
})
.catch((error) => {
  console.log(error);
});
      
    } , 1900)
      
    
 
  
  
  return (
    <div>
     {PositionData.data?.map((stock)=>
    <HoldingCard props={stock} />)}
    </div>
  )
}
