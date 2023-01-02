import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign'

export default function QuantityCounter(props) {

    

    return (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Pressable onPress={props.increment} style={{ backgroundColor: '#ef4136', padding: 8, borderRadius: 8, marginHorizontal: 10 }}>
                <Text style={{ color: '#fff', fontSize: 15 }}>
                    <Icon name='plus' size={20} color='white'/>
                </Text>
            </Pressable>
            <Text>{props.count}</Text>
            <Pressable onPress={props.decrement} style={{ backgroundColor: '#ef4136', padding: 8, borderRadius: 8, marginHorizontal: 10 }} disabled={props.count == 0 ? true : false }>
                <Text style={{ color: '#fff', fontSize: 15 }}>
                    <Icon name='minus' size={20} color='white'/>
                </Text>
            </Pressable>
        </View>
    )
}