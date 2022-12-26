import React from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import splashImage from './../images/splashImage.jpg'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function Splash({navigation}) {
    return (
        <View style={styles.container}>
            <ImageBackground source={splashImage} resizeMode="cover" style={styles.image}>
                <Text style={[styles.text, styles.headerSpacing]}>Find the Ideal slot for you.</Text>
                <View style={{ alignItems: 'center' }}>
                <View style={styles.ref}>
                        <Text style={{color: '#fff', fontWeight: '500', fontSize: 20}}>Get a great ride on great price.</Text>
                    </View>
                    <View style={styles.startParent}>
                        <Text style={styles.startText}>Get Started</Text>
                        <TouchableOpacity onPress={() => { navigation.navigate('register') }}>
                            <Icon style={styles.startIcon} name='arrow-forward-ios' size={20} color='white' />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.ref}>
                        <Text style={{color: '#fff'}}>Already have an account?</Text>
                        <TouchableOpacity onPress={() => { navigation.navigate('login') }}>
                            <Text style={styles.hrefLink}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: 'space-between'
    },
    text: {
        color: "#000",
        fontSize: 42,
    },
    headerSpacing: {
        marginHorizontal: 20,
        marginVertical: 50,
    },
    textUnderline: {
        textDecorationLine: 'underline',
    },
    startParent: {
        marginBottom: 30,
        flexDirection: 'row',
        backgroundColor: '#1B2763',
        width: 300,
        height: 80,
        borderRadius: 50,
    },
    startText: {
        flexGrow: 1,
        paddingHorizontal: 30,
        paddingVertical: 25,
        fontSize: 20,
        color: '#fff'
    },
    startIcon: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: '#2B3980',
        height: 60,
        width: 60,
        borderRadius: 50,
        elevation: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 15,
    },
    ref: {
        flexDirection: 'row',
        marginBottom: 40,
    },
    hrefLink: {
        color: '#fff',
        marginLeft: 5,
        textDecorationLine: 'underline'
    }
});