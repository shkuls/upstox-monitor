import React, {useEffect, useState } from 'react'
import Home from './isLoggedin/Home'
import Login from './Login/Login'
import axios from 'axios'

export const AccessContext =React.createContext(); 

export default function index() {
  
  const [isLoggedin , setLogin] = useState(false)
  const [accessToken , setaccess] = useState(null)
      useEffect(()=>{
        
        axios.get("http://localhost:8000/getLogin")
        .then((response)=>{
          
          if(response.data)
            {setLogin(true)
            setaccess(response.data)}
          
        })
        .catch(error => console.error('Error:', error));

      })
  return (
<AccessContext.Provider value={accessToken}>


    <div  className='h-5/6'>

      { isLoggedin ?<Home/> : <Login/>}
    </div>
</AccessContext.Provider>

  )
}
