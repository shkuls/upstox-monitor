import React from 'react'

export default function Login() {
    const upstoxLogin = ()=>{
        // chrome.tabs.create({ url: "https://stock-monitor-backend-theta.vercel.app/login" });
         window.location.href="https://stock-monitor-backend-theta.vercel.app/login";
    }
  return (
    <div className='h-[200px] flex'>
      <button className="bg-[#41246E] text-white w-1/3 h-[40px] p-2 rounded-md hover:w-[40%] hover:h-[50px] transition-all m-auto text-sm active:w-[37%] active:h-[45px] hover:text-lg hover:bg-[#6c48a3]" onClick={upstoxLogin}>Login</button>
    </div>
  )
}
