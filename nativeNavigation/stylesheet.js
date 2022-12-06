import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    productContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: "#fff"
    },
    productParent: {
        width: 175,
        margin: 10,
    },
    product: {
        flex: 1,
        borderRadius: 10,
        borderWidth: 1,
        paddingVertical: 10,
        borderColor: 'darkcyan',
    },
    productImg: {
        margin: 10,
        height: 120,
    },
    featuredDetails: {
        flex: 1,
        marginHorizontal: 10
    },
    featuredTxt: {
        textAlign: "center",
        marginTop: 10,
        fontWeight: "700"
    },
});

export default styles;