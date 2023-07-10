import React from 'react'

export const BuyButton = ({name}) => 
  <button>Click this to buy {name}</button>

export const BuyButton2 = ({name}) => {
  console.log(this)
  return <button>Click this to buy {name}</button>
}
    
export function BuyButton3({name}) {
  console.log(this)
  return <button>Click this to buy {name}</button>
}
