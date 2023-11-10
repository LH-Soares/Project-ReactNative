import React from 'react'
import { Text } from 'react-native'

const ShoppingCart = ({route}: any) => {
  const{shoppingCart} = route.params
  return (
   shoppingCart.map((prod: any, i:number) =>(
    <Text key={i}>{prod.name}</Text>
   ))
  )
 }

export default ShoppingCart