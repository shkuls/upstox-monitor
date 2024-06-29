import React from 'react'

const BACKEND_HOST = process.env.NEXT_PUBLIC_BACKEND_HOST;

export default function Login() {
    const upstoxLogin = ()=>{
        chrome.tabs.create({ url: `${BACKEND_HOST}/login` }); 
       //window.location.href=`${BACKEND_HOST}/login`;//comment out for testing on localhost
    }
  return (
    <div className='h-[200px] flex'>
      <button className="bg-[#41246E] text-white w-1/3 h-[40px] p-2 rounded-md hover:w-[40%] hover:h-[50px] transition-all m-auto text-sm active:w-[37%] active:h-[45px] hover:text-lg hover:bg-[#6c48a3]" onClick={upstoxLogin}>Login</button>
    </div>
  )
}
