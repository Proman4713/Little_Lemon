import * as React from "react"
import {
    View,
    Text,
    StyleSheet,
    Platform
} from 'react-native';

export default function Item({ name="", price="0" }) {
    return (
        <>
            <View style={itemStyles.item}>
                <Text style={[itemStyles.cont, Platform.OS === "ios" ? {} : {maxWidth: "74%"}]} numberOfLines={1}>
                    { name }
                </Text>
                <Text style={itemStyles.price}>{ price + " EGP" }</Text>
            </View>
        </>
    );
}

let itemStyles = StyleSheet.create({
    item: {
        flex: 0.98,
        padding: 20,
        backgroundColor: "#ebc934",
        marginBottom: 5,
        borderRadius: 15,
        flexDirection: Platform.OS === "ios" ? "column" : "row",
        justifyContent:"space-between"
    },
    cont: {
        color: "black",
        fontSize: 30,
        fontWeight: "bold"
    },
    price: {
        color: "black",
        fontSize: Platform.OS === "ios" ? 15 : 22,
        color: "#495E57",
        fontWeight: "bold",
        marginTop: "auto",
        marginBottom: "auto"
    }
})