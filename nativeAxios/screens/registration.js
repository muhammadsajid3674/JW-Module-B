import React from 'react'
import { Image, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import RegisterImg from '../images/register.png';

const colors = {
    primary: '#0058bc',
    secondary: '#1b2e35'
}

const Registration = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <View style={{ paddingHorizontal: 25 }}>
                <View style={{ alignItems: 'center' }}>
                    <Image source={RegisterImg} style={{ height: 300, width: 300 }} />
                </View>
                <Text style={styles.headerTxt}>Register</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30 }}>
                    <TouchableOpacity
                        onPress={() => { }}
                        style={styles.socialMediaIcon}>
                        <Image source={require("../images/google.png")} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { }}
                        style={styles.socialMediaIcon}>
                        <Image source={require("../images/facebook.png")} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { }}
                        style={styles.socialMediaIcon}>
                        <Image source={require("../images/phone.png")} />
                    </TouchableOpacity>
                </View>
                <View style={styles.inputContainer}>
                    <MaterialIcon name='face-man-profile' size={20} color='#666' style={{ marginRight: 5 }} />
                    <TextInput placeholder='Full Name' style={{ flex: 1, paddingVertical: 0 }} />
                </View>
                <View style={styles.inputContainer}>
                    <Icon name='alternate-email' size={20} color='#666' style={{ marginRight: 5 }} />
                    <TextInput placeholder='Email ID' style={{ flex: 1, paddingVertical: 0 }} />
                </View>
                <View style={styles.inputContainer}>
                    <Icon name='lock' size={20} color='#666' style={{ marginRight: 5 }} />
                    <TextInput placeholder='Password' style={{ flex: 1, paddingVertical: 0 }} />
                </View>
                <View style={styles.inputContainer}>
                    <Icon name='lock' size={20} color='#666' style={{ marginRight: 5 }} />
                    <TextInput placeholder='Confirm Password' style={{ flex: 1, paddingVertical: 0 }} />
                </View>
                <TouchableOpacity style={styles.customButton}>
                    <Text style={{
                        textAlign: 'center',
                        fontWeight: '700',
                        fontSize: 16,
                        color: '#fff',
                    }}>
                        Register
                    </Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 30 }}>
                    <Text>Already Register?</Text>
                    <TouchableOpacity onPress={() => { }}>
                        <Text style={{ color: colors.secondary, fontWeight: '700' }}> Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerTxt: {
        fontSize: 20,
        fontWeight: "500",
        color: "#333",
        marginBottom: 30,
    },
    inputContainer: {
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25,
    },
    socialMediaIcon: {
        borderColor: '#ddd',
        borderWidth: 2,
        borderRadius: 10,
        paddingHorizontal: 30,
        paddingVertical: 10,
    },
    customButton: {
        backgroundColor: colors.primary,
        padding: 15,
        borderRadius: 10,
        marginBottom: 30,
    }
})

export default Registration           