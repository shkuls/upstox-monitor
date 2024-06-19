import React , {useContext} from 'react'
import HoldingCard from '../../../components/HoldingCard'
import { tokenContext } from '../..'
// const response = [1,2]

export default function Positions() {
  const {token} = useContext(tokenContext)
  console.log(token)
  return (
    <div>
     {/* {response.data.map((stock)=>
    <HoldingCard props={stock} />)} */}
    </div>
  )
}
