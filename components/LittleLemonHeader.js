import * as React from "react"
import {
	View,
	Text,
	StyleSheet
} from 'react-native';

export default function LittleLemonHeader() {
	return (
		<>
			<View style={headerStyles.container}>
				<Text style={headerStyles.paragraph}>Little Lemon</Text>
			</View>
		</>
	);
}

let headerStyles = StyleSheet.create({
	container: {
		//flex: 0.15,
		backgroundColor: "#F4CE14",
		justifyContent: "center",
		alignContent: "center",
		padding: 20		
	},
	paragraph: {
		marginTop: 20,
		fontSize: 30,
		color: "black",
		fontWeight: "bold",
		textAlign: "center",
	}
})