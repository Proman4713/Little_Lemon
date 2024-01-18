import * as React from "react"
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default function WelcomeScreen() {
    return (
        <>
            <View>
                <Text style={styles.title}>Welcome to Little Lemon</Text>
				<Text style={styles.content}>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!</Text>
            </View>
        </>
    );
}

let styles = StyleSheet.create({
	title: {
		color: "#f1f1f1",
		fontSize: 35,
		textAlign: "center",
		marginTop: 30
	},
	content: {
		color:"#ffffff",
		fontSize: 20,
		textAlign: "center",
		marginTop: 20,
        padding: 20
	},
})