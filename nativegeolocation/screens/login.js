import React, { useState } from 'react'
import { ActivityIndicator, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import auth from '@react-native-firebase/auth';
import { ABInput, ABInputPassword } from '../components/ABInput';

const colors = {
    primary: '#1B2763',
    secondary: '#1b2e35'
}

const Login = ({ navigation }) => {

    const [modal, setModal] = useState({})
    let { fullName, email, password } = modal
    const [isLoading, setLoading] = useState(false)
    const handleChange = (key, value) => {
        const newField = { [key]: value }
        setModal({ ...modal, ...newField })
    }

    let pushData = () => {
        setLoading(true)
        auth().signInWithEmailAndPassword('saad@test.com', '123456')
        .then((res) => {
            navigation.navigate('map');
            setLoading(false)
            })
            .catch((err) => {
                console.log(err);
                setLoading(false)
            })
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#fff' }}>
            <View style={{ paddingHorizontal: 25 }}>
                <Text style={styles.headerTxt}>Login</Text>
                <ABInput onChange={(e) => handleChange('email', e)} icon='alternate-email' placeholder='Email ID' />
                <ABInputPassword onChange={(e) => handleChange('password', e)}  icon='lock' placeholder='Enter Password' />
                <TouchableOpacity style={styles.customButton} onPress={pushData}>
                    {isLoading ? (
                        <ActivityIndicator color='white' />
                    ) : (
                        <Text style={{
                            textAlign: 'center',
                            fontWeight: '700',
                            fontSize: 16,
                            color: '#fff',
                        }}>
                            Login
                        </Text>
                    )}
                </TouchableOpacity>
                <Text style={{ textAlign: 'center', color: '#666', marginBottom: 30 }}>
                    Or, Login with ...
                </Text>
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
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 30 }}>
                    <Text>New to the app?</Text>
                    <TouchableOpacity onPress={() => { navigation.navigate('register') }}>
                        <Text style={{ color: colors.secondary, fontWeight: '700' }}> Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerTxt: {
        fontSize: 30,
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

export default Login           