import React from 'react'

export default function Login() {
    const upstoxLogin = ()=>{
        chrome.tabs.create({ url: "https://api.upstox.com/v2/login/authorization/dialog?response_type=code&client_id=ef205808-6b74-4212-adbf-09cac28347c9&redirect_uri=https://www.google.com/" });
    }
  return (
    <div>
      <button onClick={upstoxLogin}>Login</button>
    </div>
  )
}
