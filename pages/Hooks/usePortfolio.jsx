import axios from "axios";
import { useState } from "react";
export default function usePortfolio(token) {
    let data = null
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://api.upstox.com/v2/portfolio/long-term-holdings",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    };
    axios(config)
      .then((response) => {
       return (response.data)
       
        
      })
      .catch((error) => {
        console.log(error);
      });


      
}
