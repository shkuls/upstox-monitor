import axios from "axios";
import { useEffect } from "react";
export default function usePortfolio(token, setData) {

 
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "https://api.upstox.com/v2/portfolio/long-term-holdings",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      };
      
      try {
        axios(config)
        .then((response)=>{

          setData(response.data);
        })
      } catch (error) {
        console.error("Error fetching data:", error);
      } 
  

  
}