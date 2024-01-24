import * as React from "react"
import {
	View,
	Text,
	StyleSheet,
	Platform
} from 'react-native';

export default function LittleLemonFooter() {
	return (
		<>
			<View style={footerStyles.container}>
				<Text style={footerStyles.paragraph}>{Platform.OS === "ios" ? "Copyright © 2022 Little Lemon" : "All rights reserved by Little Lemon, 2022"}</Text>
			</View>
		</>
	);
}

let footerStyles = StyleSheet.create({
	container: {
		backgroundColor: "#F4CE14",
		padding: 20
	},
	paragraph: {
		fontSize: 18,
		color: "black",
		fontWeight: "bold",
		textAlign: "center",
	}
})