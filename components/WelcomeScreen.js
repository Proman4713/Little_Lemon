import * as React from "react"
import {
    View,
    Text,
    StyleSheet,
	Image,
	Pressable,
	Platform
} from 'react-native';

export default function WelcomeScreen({ navigation }) {
	const [hover, changeHover] = React.useState(false)

    return (
        <>
            <View style={welcomeStyles.container}>
                <Image source={require("../assets/images/little-lemon-logo.png")} style={{ width: 200, height: 200, resizeMode: "contain", marginRight: "auto", marginLeft: "auto", marginBottom: -10 }} />
				<Text style={welcomeStyles.content}>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!</Text>
				<Pressable style={[ welcomeStyles.btn, { backgroundColor: hover ? "#495E57AA" : "#495E57" } ]} onPress={() => navigation.navigate("Subscribe")} onPressIn={() => { changeHover(true) }} onPressOut={() => { changeHover(false) }}>
					<Text style={welcomeStyles.btnText}>Newsletter</Text>
				</Pressable>
            </View>
        </>
    );
}

let welcomeStyles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		backgroundColor: "#abab27",
		justifyContent: "center"
	},
	content: {
		color:"#495E57",
		fontSize: 16,
		textAlign: "center",
		marginTop: 20,
        padding: 20,
		fontWeight: "bold",
		fontFamily: Platform.OS === "ios" ? "Courier New" : "monospace"
	},
	btn: {
		padding: 10,
		backgroundColor: "#495E57",
		width: "90%",
		marginLeft: "auto",
		marginRight: "auto",
		borderRadius: 15,
		marginBottom: "-25%",
		marginTop: Platform.OS === "ios" ? "10%" : "25%"
	},
	btnText: {
		color: "#F4CE14",
		fontSize: 25,
		textAlign: "center",
		fontWeight: "bold"
	}
})