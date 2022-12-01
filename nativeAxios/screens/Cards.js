import { Card } from '@rneui/themed'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from
    'react-native'

const colors = {
    primary: '#0058bc',
    secondary: '#1b2e35'
}


const Cards = () => {

    const [isLoading, setLoader] = useState(true)
    const [data, setData] = useState([])

    const getData = () => {
        axios.get('https://fakestoreapi.com/products')
            .then((response) => {
                console.log(response.data);
                setData(response.data);
                setLoader(false);
            })
            .catch((error) => {
                console.log(error);
                setLoader(false); r
            })
    }
    useEffect(() => {
        getData()
    }, [])


    return (
        <>
            <Text style={styles.headerTxt}>Product Cards</Text>
            {isLoading ? (
                <View style={[styles.container, styles.horizontal]}>
                    <ActivityIndicator size='large' />
                </View>
            ) : (
                <ScrollView>
                    <View style={styles.container}>
                        {data.map((e, i) => {
                            return <Card key={i}>
                                <Card.Title>{e.title}</Card.Title>
                                <Card.Divider />
                                <Card.Image
                                    style={{ padding: 0 }}
                                    source={{
                                        uri: e.image,
                                    }}
                                />
                                <Text style={{ marginBottom: 10 }}>
                                    {e.description}
                                </Text>
                                <Text style={{ color: colors.secondary, fontWeight: '700', marginBottom: 10 }}>Category: {e.category}</Text>
                                <Text style={{ color: colors.secondary, fontWeight: '700', marginBottom: 10 }}>$: {e.price}</Text>
                                <Text style={{ marginBottom: 10 }}>
                                    <TouchableOpacity onPress={() => { }}>
                                        <Text style={{ color: colors.primary, fontWeight: '700' }}>View More</Text>
                                    </TouchableOpacity>
                                </Text>
                            </Card>
                        })}
                    </View>
                </ScrollView>
            )}
        </>
    )
}

const styles = StyleSheet.create({
    headerTxt: {
        textAlign: 'center',
        fontSize: 50,
        fontWeight: "500",
        color: "#333",
        marginVertical: 10
    },
    container: {
        flex: 1,
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
});


export default Cards