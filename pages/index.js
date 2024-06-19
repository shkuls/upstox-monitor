import React, { createContext, useEffect, useState } from 'react'
import Home from './isLoggedin/Home'
import Login from './Login/Login'
import axios from 'axios'
export const tokenContext = createContext("");

export default function index() {
  
  const [isLoggedin , setLogin] = useState(false)
  const [accessToken , setAccessToken] = useState("");
      useEffect(()=>{
        
        axios.get("http://localhost:8000/getAccess")
        .then((response)=>{
          console.log(response.data)
          if(response.data)
            setAccessToken(accessToken)
            setLogin(true)

        })
        .catch(error => console.error('Error:', error));

      })
  return (
<tokenContext.Provider value={accessToken}>

    <div  className='h-5/6'>
      { isLoggedin ?<Home/> : <Login/>}
    </div>
</tokenContext.Provider>
  )
}
