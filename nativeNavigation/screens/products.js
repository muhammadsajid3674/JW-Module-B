import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import styles from '../stylesheet'

const Products = ({ navigation }) => {

    const [isLoading, setLoader] = useState(true)
    const [productList, setProductList] = useState([]);
    let getData = () => {
        let api = 'https://fakestoreapi.com/products';
        axios
            .get(api)
            .then(res => {
                setLoader(false)
                setProductList(res.data);
            })
            .catch(err => {
                setLoader(false)
                console.log(err);
            });
    };

    let move = (productDetails) => {
        navigation.navigate('Product', productDetails)
    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <>
            <View style={styles.container}>
                {isLoading ? (
                    <ActivityIndicator size='large' />
                ) : (
                    <ScrollView>
                        <View style={styles.productContainer}>
                        {productList.map((e, i) => {
                            return <TouchableOpacity style={styles.productParent} onPress={() => move(e)} key={i}>
                                <View style={styles.product}>
                                    <Image source={{ uri: e.image }} style={styles.productImg} resizeMode='contain' />
                                    <View style={styles.featuredDetails}>
                                        <Text style={styles.featuredTxt}>{e.title}</Text>
                                        <Text style={[styles.featuredTxt, { fontSize: 20 }]}>${e.price}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        })}
                        </View>
                    </ScrollView>
                )}
            </View>
        </>
    )
}

export default Products