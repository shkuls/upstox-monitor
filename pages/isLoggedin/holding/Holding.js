import { useEffect, useState } from "react";
import HoldingCard from "../../../components/HoldingCard";
import axios from "axios";
import { useContext } from "react";
import index, { AccessContext } from "../..";
import usePortfolio from "../../Hooks/usePortfolio";
import Link from "next/link";

export default function Holding() {
  const token = useContext(AccessContext);

  const [PositionData, setPositionData] = useState(null);
  const [isLoading , setLoading ] = useState(true)

  useEffect(() => {
    const date = new Date();
    if (date.getHours < 16 && 8 < date.getHours ){
        setInterval(() => {
        
            usePortfolio(token , setPositionData);
            if(PositionData?.status != "success")
            setLoading(false)
         
      }, 1810);
    }
    else{
      
      usePortfolio(token , setPositionData);
      if(PositionData?.status != "success")
            setLoading(false)
    }
  }, []);
  

  let pnl = 0;
  if(isLoading)
    {return <p className="w-1/2 text-center m-auto">Loading... </p>}
  else
  return (
    <div className="flex flex-row">
      <div className="flex flex-col">
        {PositionData?.data.map((stock , index) => {
          pnl += stock.pnl;
          return <HoldingCard key={index} props={stock} />;
        })}
      </div>
      <div className="flex flex-col">
        <span className="flex flex-col mt-10">
          <p className="text-center font-sm]">Net P/L</p>
          <p
            className={`text-sm m-auto ${
              pnl > 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {"₹" + pnl.toFixed(2)}
          </p>
        </span>
        <Link
          className="bg-[#41246E] text-white w-full
         h-[40px] p-2 rounded-md transition-all m-auto text-sm active:bg-[#986bdb] hover:bg-[#6c48a3] text-center"
          href="https://pro.upstox.com/"
        >
          Open Upstox
        </Link>
      </div>
    </div>
  );
}
