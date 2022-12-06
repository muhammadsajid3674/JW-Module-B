import React from 'react'
import { Image, Text, View } from 'react-native'
import styles from '../stylesheet';

function ProductDetails({navigation, route}) {

    console.log(route.params);

  return (
    <View style={{ flex: 1,backgroundColor: "#fff" }}>
        <Image 
        resizeMode='contain'
        source={{ uri: route.params.image }} 
        style={{
            height: 300,
            margin: 30
        }}/>
        <Text style={{ fontSize: 25, marginLeft: 50, marginVertical:10 }}>{route.params.title}</Text>
        <Text style={{ fontSize: 15, marginLeft: 50, marginVertical:10 }}>{route.params.category}</Text>
        <Text style={{ fontSize: 25, marginLeft: 50, marginVertical:10 }}>${route.params.price}</Text>
    </View>
  )
}

export default ProductDetails