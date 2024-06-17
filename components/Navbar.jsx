import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='m-auto flex flex-row w-5/6 justify-around font-semibold'>
      <Link href="/watch">Watchlist</Link>
      <Link href="/positions">Positions</Link>
    </div>
  )
}
