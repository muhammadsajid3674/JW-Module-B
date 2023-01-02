import React, { useState } from 'react'
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ABInput } from '../components/ABInput';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const colors = {
    primary: '#ef4136',
    secondary: '#1b2e35'
}

const Registration = ({ navigation }) => {
    const [modal, setModal] = useState({})
    let { fullName, email, password } = modal
    const [isLoading, setLoading] = useState(false)

    const handleChange = (key, value) => {
        const newField = { [key]: value }
        setModal({ ...modal, ...newField })
    }

    let createUser = () => {
        setLoading(true)
        modal.category = 'booker'
        auth().createUserWithEmailAndPassword(email, password)
            .then((res) => {
                modal.id = database().ref('User/').push().key;
                database()
                    .ref(`User/${modal.id}`)
                    .set(modal)
                    .then(() => {
                        console.log('Success');
                    })
                    .catch(err => {
                        console.log(err);
                    });
                navigation.navigate('login');
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
                <ABInput onChange={(e) => handleChange('fulName', e)} icon='person' placeholder='Full Name' />
                <ABInput onChange={(e) => handleChange('email', e)} icon='alternate-email' placeholder='Email ID' />
                <ABInput icon='lock' placeholder='Enter Password' typePassword={true} />
                <ABInput onChange={(e) => handleChange('password', e)} icon='lock' placeholder='Confirm Password' typePassword={true} />
                <TouchableOpacity onPress={createUser} style={styles.customButton}>
                    {isLoading ? (
                        <ActivityIndicator color='white' />
                    ) : (
                        <Text style={{
                            textAlign: 'center',
                            fontWeight: '700',
                            fontSize: 16,
                            color: '#fff',
                        }}>
                            Register
                        </Text>
                    )}
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 30 }}>
                    <Text>Already Register?</Text>
                    <TouchableOpacity onPress={() => { navigation.navigate('login') }}>
                        <Text style={{ color: colors.secondary, fontWeight: '700' }}> Login</Text>
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

export default Registration           