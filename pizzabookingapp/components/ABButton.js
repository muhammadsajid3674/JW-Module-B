import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function ABButton(props) {
    return (
        <TouchableOpacity style={styles.customButton} onPress={props.onPress}>
            <Text style={styles.buttonTxt}>{props.label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    customButton: {
        backgroundColor: '#ef4136',
        padding: 15,
        borderRadius: 10,
    },
    buttonTxt: {
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 16,
        color: '#fff',
    }
})