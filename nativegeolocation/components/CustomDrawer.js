import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import avatar from '../images/avatar.png';
import database from '@react-native-firebase/database';

export default function CustomDrawer(props) {

    const [data, setData] = useState({});
    let getUser = () => {
        database()
            .ref('User')
            .once('value', dt => {
                let li = Object.values(dt.val());
                setData([...li])
            })
    }
    console.log(data);
    console.log(data);
    useEffect(() => {
        getUser()
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: '#eee' }}>
                    <Image
                        source={avatar}
                        style={{ height: 80, width: 80, borderRadius: 40, marginBottom: 10 }}
                    />
                    <Text style={{ fontSize: 20 }}>Saad Ali</Text>
                </View>
                <View style={{ paddingTop: 10, flex: 1 }}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
        </View>
    )
}