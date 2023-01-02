import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import pizza1 from '../images/pizzaLg.png';
import Icon from 'react-native-vector-icons/AntDesign'

export default function ProductItem( {navigator, listItem } ) {

    return (
        <View style={styles.productListContainer}>
            <Text style={{ fontSize: 20, color: '#ef4136' }}>{listItem?.pizzaName}</Text>
            <Image source={pizza1} style={{ height: 150, width: 150 }} />
            <View style={{ flexDirection: 'row', }}>
                <View style={{ flexGrow: 1 }}>
                    <Text><Icon name='star' size={15} color="orange"/> 50</Text>
                    <Text>$ {listItem?.price}</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={navigator}>
                        <Icon style={styles.startIcon} name='plus' size={18} color='white' />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
 const styles = StyleSheet.create({
    productListContainer: {
        width: 170,
        padding: 10,
        margin: 5,
        borderRadius: 10,
        alignItems: 'center',
        elevation: 10,
        backgroundColor: '#fff'
    },
    startIcon: {
        paddingHorizontal: 6,
        paddingVertical: 6,
        backgroundColor: '#ef4136',
        height: 30,
        width: 30,
        borderRadius: 50,
        elevation: 40,
    },
 })