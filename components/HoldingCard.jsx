import React from 'react'


export default function HoldingCard(stock) {
    console.log(stock.props.company_name)
  return (
    <div>
    {JSON.stringify(stock.props.pnl)}
    </div>
  )
}
