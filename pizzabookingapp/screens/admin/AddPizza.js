import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { ABInput } from '../../components/ABInput'
import database from '@react-native-firebase/database';

export default function AddPizza() {


    const [isLoading, setLoading] = useState(false)
    const [modal, setModal] = useState({})

    let sendData = () => {
        console.log(modal)
        setLoading(true)
        modal.id = database().ref('Pizzas/').push().key;
        database()
            .ref(`Pizzas/${modal.id}`)
            .set(modal)
            .then(() => {
                setLoading(false)
                console.log('Success');
            })
            .catch(err => {
                setLoading(false)
                console.log(err);
            });
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <View style={{ paddingHorizontal: 25 }}>
                <Text style={styles.headerTxt}>Register Vehicle</Text>
                <ABInput value={modal.pizzaName} onChange={(e) => setModal({ ...modal, pizzaName: e })} icon='local-pizza' placeholder='Pizza Name' />
                <ABInput value={modal.price} onChange={(e) => setModal({ ...modal, price: e })} icon='attach-money' placeholder='Price' />
                <TouchableOpacity onPress={sendData} style={styles.customButton} >
                    {isLoading ? (
                        <ActivityIndicator color='white' />
                    ) : (
                        <Text style={{
                            textAlign: 'center',
                            fontWeight: '700',
                            fontSize: 16,
                            color: '#fff',
                        }}>
                            Submit
                        </Text>
                    )}
                </TouchableOpacity>
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
        backgroundColor: '#ef4136',
        padding: 15,
        borderRadius: 10,
        marginBottom: 30,
    }
})