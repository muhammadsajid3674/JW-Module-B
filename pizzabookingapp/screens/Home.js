import React, { useEffect, useState } from 'react'
import { View, ImageBackground, StyleSheet, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import homeImage from '../images/Home.png';
import ProductItem from '../components/ProductItem';
import database from '@react-native-firebase/database';

export default function Home({ navigation }) {

    const [listItem, setListItem] = useState([])

    let getPizzas = () => {
        database()
          .ref('Pizzas')
          .on('value', snapshot => {
            const fbObject = snapshot.val();
            const newArr = Object.keys(fbObject).map((key) => {
              fbObject[key].id = key;
              return fbObject[key];
            });
            setListItem(newArr)
          })
      }
      useEffect(() => {
        getPizzas()
      }, [])

    return (
        <View style={styles.container}>
            <ImageBackground source={homeImage} resizeMode="cover" style={styles.image}>
                <View style={styles.headerTxt}>
                    <Text style={{ color: '#fff' }}>Hello Muhammad Sajid</Text>
                    <Text style={{ color: '#fff', fontSize: 30 }}>Hope You Are Hungry!</Text>
                </View>
            </ImageBackground>
            <View style={styles.itemContainer}>
                <View style={{ alignItems: 'center', marginVertical: 20 }}>
                    <Text style={{ color: '#ef4136', fontSize: 30, }}>Pizzas</Text>
                </View>
                <ScrollView>
                    <View style={{ marginHorizontal: 15, flexDirection: 'row', flexWrap: 'wrap' }}>
                        {listItem.map(e => <ProductItem key={e.id} listItem={e} navigator={() => {navigation.navigate('product', e)}}/>)}
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        height: 300,
        justifyContent: 'center',
    },
    headerTxt: {
        margin: 20
    },
    itemContainer: {
        flex: 1,
        // position: 'relative',
        // bottom: 40,
        backgroundColor: '#fff',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },
});