import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import ABButton from "./ABButton";
import { ABInput } from "./ABInput";

const CusModal = (props) => {

    const [destination, setDestination] = useState('')
    const kero = () => {
        props.selectedDestination = destination;
        props.navigator
    }
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.modalVisible}
            style={styles.centeredView}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <ABInput value={destination} icon='location-pin' placeholder="Enter Destination" onChange={(e) => setDestination(e)} />
                    <ABButton label='submit' onPress={kero} />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:'rgba(0,0,0,0.5)',
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "flex-start",
        shadowColor: "#000",
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});

export default CusModal;