import React, {useEffect, useState } from 'react'
import Home from './isLoggedin/Home'
import Login from './Login/Login'
import axios from 'axios'

export default function index() {
  
  const [isLoggedin , setLogin] = useState(false)
      useEffect(()=>{
        
        axios.get("http://localhost:8000/getLogin")
        .then((response)=>{
          console.log(response.data)
          if(response.data)
            setAccessToken(accessToken)
            setLogin(true)

        })
        .catch(error => console.error('Error:', error));

      })
  return (

    <div  className='h-5/6'>
      { isLoggedin ?<Home/> : <Login/>}
    </div>

  )
}
