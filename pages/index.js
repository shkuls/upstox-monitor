import React, {useEffect, useState } from 'react'
import Home from './isLoggedin/Home'
import Login from './Login/Login'
import axios from 'axios'

export const AccessContext =React.createContext(); 

export default function index() {
  
  const [isLoggedin , setLogin] = useState(false)
  const [accessToken , setaccess] = useState(null)
  
  useEffect(()=>{
    const currentTime =new Date().getTime();
    const getToken = () =>{
      axios.get("https://stock-monitor-backend-theta.vercel.app/getLogin")
              .then((response)=>{
                
                if(response.data)
                  {
                    const accessData = {
                      access_token : response.data ,
                      token_creation_time : currentTime ,
                    }
                    localStorage.setItem( 'accessData' , JSON.stringify(accessData))
                    setaccess(response.data)
                    setLogin(true)
                }
                
              })
              .catch(error => console.error('Error:', error));
      
    }
        const accessData = JSON.parse(localStorage.getItem('accessData'));
            if (accessData) {
              if((currentTime - accessData.token_creation_time)/1000 < 30000 ){
                setaccess(accessData.access_token)
                setLogin(true)

              }
              else{
                getToken();
              }

            }
            else{
              getToken()
              
            }





      })
  return (
<AccessContext.Provider value={accessToken}>


    <div  className='h-5/6'>

      { isLoggedin ?<Home/> : <Login/>}
    </div>
</AccessContext.Provider>

  )
}
