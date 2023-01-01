import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

export function ABInput(props) {

    let { icon, placeholder, label, typePassword, onChange, value } = props

    return (
        <View style={styles.inputContainer}>
            <Icon name={icon} size={20} color='#666' style={{ marginRight: 5 }} />
            <TextInput value={value} onChangeText={onChange} secureTextEntry={typePassword} placeholder={placeholder} style={{ flex: 1, paddingVertical: 0 }} />
        </View>
    )
}
export function ABInputPassword(props) {

    let { icon, placeholder, label, onChange } = props

    return (
        <View style={styles.inputContainer}>
            <Icon name={icon} size={20} color='#666' style={{ marginRight: 5 }} />
            <TextInput onChangeText={onChange} secureTextEntry={true} placeholder={placeholder} style={{ flex: 1, paddingVertical: 0 }} />
            <TouchableOpacity onPress={() => { }}>
                <Text style={{ color: '#1b2e35', fontWeight: '700' }}>Forgot?</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25,
    },
})
