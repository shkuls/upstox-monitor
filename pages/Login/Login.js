import React from 'react'

export default function Login() {
    const upstoxLogin = ()=>{
        // chrome.tabs.create({ url: "http://localhost:8000/login" });
        window.location.href="http://localhost:8000/login";
    }
  return (
    <div>
      <button onClick={upstoxLogin}>Login</button>
    </div>
  )
}
