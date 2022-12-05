import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap"
    },
    productParent: {
        height: 250,
        width: 175,
        margin: 10,
    },
    product: {
        flex: 1,
        borderRadius: 10,
        backgroundColor: 'darkcyan',
    },
    productImg: {
        marginTop: 10,
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