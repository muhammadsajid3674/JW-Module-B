import { View, Text } from 'react-native'
import React from 'react'

export default function OrderBook({route}) {
    console.log(route.params);
  return (
    <View>
      <Text>OrderBook</Text>
    </View>
  )
}