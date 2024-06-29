import React from 'react'
import { useContext , useState , useEffect} from 'react'
import { AccessContext } from '../..'
import axios from 'axios';
import usePortfolio from '../../Hooks/usePortfolio';

export default function Portfolio() {
  const token = useContext(AccessContext);

  const [PositionData, setPositionData] = useState([]);
  const [isLoading , setLoading ] = useState(true)

  useEffect(() => {
    const date = new Date();
    if (date.getHours < 16 && 8 < date.getHours ){
        setInterval(() => {
        
            usePortfolio(token , setPositionData);
            if(PositionData.status != "success")
            setLoading(false)
         
      }, 1810);
    }
    else{
      
      usePortfolio(token , setPositionData);
      if(PositionData.status != "success")
            setLoading(false)
    }
  }, []);

  let investedPortfolio =0; 
  let totalPnl =0;     
  
  if(PositionData){

    PositionData?.data?.forEach(stock => {
      totalPnl+=stock.pnl;
      investedPortfolio+=stock.last_price * stock.quantity;
    });
  }     
  let portfolio=investedPortfolio+totalPnl;

  if(isLoading)
    return <p className="w-1/2 text-center m-auto">Loading...
      </p>
  return (
    <div >
    
    <div className=" flex flex-row ">
    <span className='flex flex-col flex-auto border rounded-xl m-3'>
          <h1 className='text-[12px] text-center'> 
          {"Invested Amount"}
          </h1>
          <h1 className='text-md text-center'> 
          {"₹"+investedPortfolio}
          </h1>
    
    </span>
    <span className='flex flex-col flex-auto border rounded-xl m-3'>
          <h1 className='text-[12px] text-center'> 
          {"Portfolio"}
          </h1>
          <h1 className={`text-md text-center ${portfolio > investedPortfolio ?"text-green-600" : "text-red-600"}`}> 
          {"₹"+portfolio}
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
