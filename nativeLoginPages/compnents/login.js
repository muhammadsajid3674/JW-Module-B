import React from 'react'
import { Button, Image, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

const Login = () => {
    return (
        <View>
            <View>
                <Image source={require('../images/login1.jpg')} style={{ height: 400, width: 400 }} />
            </View>
            <View>
                <Text style={{ fontWeight: 'bold', fontSize: 40, color: '#000', padding: 20 }}>Login</Text>
            </View>
            <View style={styles.formMain}>
                <Icon name='email' size={25} style={{ marginRight: 10 }} />
                <View style={styles.TextInputContainer} >
                    <TextInput placeholder='Enter Email' />
                </View>
            </View>
            <View style={styles.formMain}>
                <Icon name='lock' size={25} style={{ marginRight: 10 }} />
                <View style={styles.TextInputContainer} >
                    <TextInput placeholder='Enter Password' secureTextEntry={true} />
                </View>
            </View>
            <View style={styles.formMain}>
                <View style={styles.ButtonContainer}>
                    <Button color='#0058bc' title="Login" />
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    formMain: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    TextInputContainer: {
        backgroundColor: 'transparent',
        borderBottomColor: '#0058bc',
        borderBottomWidth: 2,
        marginBottom: 30,
        height: 50,
        width: 300,
    },
    ButtonContainer: {
        marginVertical: 25,
        height: 50,
        width: 350,
    }
});

export default Login