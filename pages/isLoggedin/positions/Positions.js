import React from 'react'
import HoldingCard from '../../../components/HoldingCard'
const response = {
  "status": "success",
  "data": [
    {
      "isin": "INE528G01035",
      "cnc_used_quantity": 0,
      "collateral_type": "WC",
      "company_name": "YES BANK LTD.",
      "haircut": 0.2,
      "product": "D",
      "quantity": 36,
      "trading_symbol": "YESBANK",
      "tradingsymbol": "YESBANK",
      "last_price": 17.05,
      "close_price": 17.05,
      "pnl": -61.2,
      "day_change": 0,
      "day_change_percentage": 0,
      "instrument_token": "NSE_EQ|INE528G01035",
      "average_price": 18.75,
      "collateral_quantity": 0,
      "collateral_update_quantity": 0,
      "t1_quantity": 0,
      "exchange": "NSE"
    },
    {
      "isin": "INE036A01016",
      "cnc_used_quantity": 0,
      "collateral_type": "WC",
      "company_name": "RELIANCE INFRASTRUCTURE LTD.",
      "haircut": 1,
      "product": "D",
      "quantity": 1,
      "trading_symbol": "RELINFRA",
      "tradingsymbol": "RELINFRA",
      "last_price": 174.85,
      "close_price": 169.2,
      "pnl": -17.7,
      "day_change": 0,
      "day_change_percentage": 0,
      "instrument_token": "NSE_EQ|INE036A01016",
      "average_price": 192.55,
      "collateral_quantity": 0,
      "collateral_update_quantity": 0,
      "t1_quantity": 0,
      "exchange": "NSE"
    }
  ]
}

export default function Positions() {
  return (
    <div>
     {response.data.map((stock)=>
    <HoldingCard props={stock} />)}
    </div>
  )
}
