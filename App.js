import * as React from "react"
import {
	Dimensions,
	StyleSheet,
	View,
	Text,
	ScrollView
} from 'react-native';

import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from "./components/LittleLemonFooter";
import WelcomeScreen from "./components/WelcomeScreen";
import MenuItems from "./components/MenuItems";

export default function App() {
	return (
		<>
			<View style={styles.container}>
				<LittleLemonHeader />
				<MenuItems />
			</View>
			<LittleLemonFooter />
		</>
	);
}

let styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#495E57",
	},
});