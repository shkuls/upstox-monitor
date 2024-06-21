import React from 'react'


export default function HoldingCard(stock) {
    console.log(stock.props.company_name)
  return (
    <div className='border rounded-xl  m-2 w-3/4 p-3 flex flex-row justify-between'>
<span className='flex flex-col'>
      <h1 className='text-md'> 
      {stock.props.company_name}
      </h1>
      <h1 className='text-[12px]'> 
      {"Current ₹" + stock.props.last_price}
      </h1>

</span>
<span className='m-auto'>

      <p className='text-[10px] text-center w-1/2 m-auto'>
        P/L
      </p>
      <h2 className={`text-sm m-auto ${stock.props.pnl >0 ?"text-green-600" : "text-red-600"}`} >

    {"₹"+stock.props.pnl}
      </h2>
</span>
    </div>
  )
}
