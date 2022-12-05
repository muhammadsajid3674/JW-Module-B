import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import styles from '../stylesheet'

const Products = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.productParent}>
                <View style={styles.product}>
                    <Image source={{ uri: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg' }} style={styles.productImg} resizeMode='contain' />
                    <View style={styles.featuredDetails}>
                        <Text style={styles.featuredTxt}>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</Text>
                        <Text style={[styles.featuredTxt, {fontSize: 20}]}>$109.95</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Products