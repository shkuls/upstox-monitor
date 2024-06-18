import React, { useState } from 'react'
import Home from './isLoggedin/Home'
import Login from './Login/Login'

export default function index() {
        const [isLoggedin , setLogin] = useState(true)
  return (

    <div>
      { isLoggedin ?<Home/> : <Login/>}
    </div>
  )
}
