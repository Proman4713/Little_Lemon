import * as React from "react"
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    FlatList
} from 'react-native';
import Item from "./Item";

const menuItemsToDisplay = [
	{ name: 'Hummus', price: '5.00', id: '1A' },
    { name: 'Moutabal', price: '5.00', id: '2B' },
    { name: 'Falafel', price: '7.50', id: '3C' },
    { name: 'Marinated Olives', price: '5.00', id: '4D' },
    { name: 'Kofta', price: '5.00', id: '5E' },
    { name: 'Eggplant Salad', price: '8.50', id: '6F' },
    { name: 'Lentil Burger', price: '10.00', id: '7G' },
    { name: 'Smoked Salmon', price: '14.00', id: '8H' },
    { name: 'Kofta Burger', price: '11.00', id: '9I' },
    { name: 'Turkish Kebab', price: '15.50', id: '10J' },
    { name: 'Fries', price: '3.00', id: '11K' },
    { name: 'Buttered Rice', price: '3.00', id: '12L' },
    { name: 'Bread Sticks', price: '3.00', id: '13M' },
    { name: 'Pita Pocket', price: '3.00', id: '14N' },
    { name: 'Lentil Soup', price: '3.75', id: '15O' },
    { name: 'Greek Salad', price: '6.00', id: '16P' },
    { name: 'Rice Pilaf', price: '4.00', id: '17Q' },
    { name: 'Baklava', price: '3.00', id: '18R' },
    { name: 'Tartufo', price: '3.00', id: '19S' },
    { name: 'Tiramisu', price: '5.00', id: '20T' },
    { name: 'Panna Cotta', price: '5.00', id: '21U' },
]

export default function MenuItems() {
    return (
        <>
            <View style={menuStyles.container}>
                <Text style={menuStyles.text}>View Menu</Text>
                <FlatList
                data={menuItemsToDisplay}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <Item name={item.name} price={item.price} />} />
            </View>
        </>
    );
}

let menuStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scroll: {
        paddingLeft: 30,
        marginTop: 20,
        backgroundColor: "#495E57",
    },
    text: {
        fontSize: 40,
        flexWrap: "wrap",
        color: "white",
        marginTop: 10,
        textAlign: "center",
        marginBottom: 10
    },
    list: {
        color: "#F4CE14",
        fontSize: 30
    }
})