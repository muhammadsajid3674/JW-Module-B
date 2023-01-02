import React, { useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import ABButton from '../components/ABButton';
import ProductImage from '../images/pizzaLg.png';
import Icon from 'react-native-vector-icons/MaterialIcons'
import CusModal from '../components/Modal';
import QuantityCounter from '../components/QuantityCounter';

export default function Product({ route, navigation }) {

    const [orderDetails, setOrderDetails] = useState({})
    const [modalVisible, setModalVisible] = useState(false)

    const [count, setCount] = useState(0)

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    const pushDetails = () => {
        setOrderDetails(route.params)
    }

    return (
        <>
            <View style={styles.container}>
                <View style={styles.headerTxt}>
                    <Image source={ProductImage} />
                </View>
                <View style={styles.itemContainer}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, marginTop: 20 }}>
                        <Text style={{ color: '#ef4136', fontSize: 30, flexGrow: 1 }}>{route.params.pizzaName}</Text>
                        <Text style={{ color: '#ef4136', fontSize: 30, }}>$ {route.params.price}</Text>
                    </View>
                    <View style={{ marginHorizontal: 20, justifyContent: 'space-evenly', flex: 1 }}>
                        <Text style={{ color: '#ef4136', fontSize: 20 }}><Icon name='star' size={20} color="orange" /> 50</Text>
                        <Text style={{ color: '#000', fontSize: 20 }}>Description</Text>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc dui purus dictum. Egestas mattis eget blandit in. Sollicitudin mollis vivamus eget dolor venenatis, est turpis mi, tristique.
                            Habitasse massa egestas gravida molestie aenean aliquam mauris quam sed. </Text>

                        <Text style={{ color: '#bbb', fontSize: 15 }}>
                            <View style={{ backgroundColor: "red", borderRadius: 20, marginRight: 10 }}>
                                <Icon name='done' size={15} color='white' />
                            </View>
                            Free Shipping
                        </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ flexGrow: 1 }}>
                                <QuantityCounter count={count} increment={increment} decrement={decrement} />
                            </View>
                            <ABButton label='Order Now' onPress={pushDetails} />
                        </View>
                    </View>
                </View>
            </View>
            {/* <CusModal modalVisible={modalVisible} navigator={() => { navigation.navigate('Order Booking', route.params) }} /> */}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerTxt: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#eee',
    },
    itemContainer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },
})