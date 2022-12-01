import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const InputField = (props) => {
    const {label, iconName} = props
    return (
        <View style={styles.inputContainer}>
            <Icon name='alternate-email' size={20} color='#666' style={{ marginRight: 5 }} />
            <TextInput placeholder='Email ID' style={{ flex: 1, paddingVertical: 0 }} />
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

export default InputField