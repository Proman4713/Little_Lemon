import * as React from "react"
import {
    View,
    Text,
    StyleSheet,
	Image,
	Pressable,
    ScrollView,
    TextInput,
    Alert,
    Keyboard,
    Platform
} from 'react-native';
import validateEmail from "../utils/ValidateEmail";

export default function WelcomeScreen({ navigation }) {
    // State hooks for hover, validEmail, firstName, lastName, and email
	const [isHovering, setIsHovering] = React.useState(false);
    const [isValidEmail, setIsValidEmail] = React.useState(false);
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');

    React.useEffect(() => {
        const keyboardDidHideListener = Keyboard.addListener("keyboardDidHide", () => {
            TextInput.State.currentlyFocusedInput()?.blur();
        });
        return () => {
            keyboardDidHideListener.remove();
        };
    }, []);

    const handleEmailChange = (text) => {
        setEmail(text);
        setIsValidEmail(!!validateEmail(text));
    };

    const handleSubscribe = () => {
        Alert.alert("Thanks for subscribing, stay tuned!");
        setIsValidEmail(false);
        setFirstName('');
        setLastName('');
        setEmail('');
        navigation.goBack();
    };

    const handlePressIn = () => {
        setIsHovering(true);
    };

    const handlePressOut = () => {
        setIsHovering(false);
    };

    return (
        <>
            <ScrollView style={welcomeStyles.container} keyboardDismissMode="on-drag">
                <View style={welcomeStyles.innerContainer}>
                    <Image
                        source={require("../assets/images/little-lemon-logo-grey.png")}
                        style={welcomeStyles.logo}
                    />
				    <Text style={welcomeStyles.content}>
                        Subscribe to our newsletter for our latest delicious recipes!
                    </Text>
                    <TextInput
                        value={firstName}
                        onChangeText={setFirstName}
                        style={welcomeStyles.input}
                        placeholder="First Name"
                        placeholderTextColor="#33333378"
                    />
                    <TextInput
                        value={lastName}
                        onChangeText={setLastName}
                        style={welcomeStyles.input}
                        placeholder="Last Name"
                        placeholderTextColor="#33333378"
                    />
                    <TextInput
                        value={email}
                        onChangeText={handleEmailChange}
                        style={welcomeStyles.input}
                        placeholder="Email"
                        placeholderTextColor="#33333378"
                        keyboardType="email-address"
                    />
    				<Pressable
                        style={[
                            welcomeStyles.btn,
                            {
                                backgroundColor: !(!isValidEmail || !firstName || !lastName)
                                    ? isHovering ? "#495E57AA" : "#495E57"
                                    : "#6b827a"
                            }
                        ]}
                        onPress={handleSubscribe}
                        onPressIn={handlePressIn}
                        onPressOut={handlePressOut}
                        disabled={!isValidEmail || !firstName || !lastName}
                    >
					    <Text style={welcomeStyles.btnText}>Subscribe</Text>
				    </Pressable>
                </View>
            </ScrollView>
        </>
    );
}

let welcomeStyles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		backgroundColor: "#abab27"
	},
    innerContainer: {
        marginTop: "25%"
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
		borderRadius: 15
	},
	btnText: {
		color: "#F4CE14",
		fontSize: 25,
		textAlign: "center",
		fontWeight: "bold"
	},
    input: {
        backgroundColor: "#F4CE14",
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: 15,
        padding: 10,
        paddingLeft: 12,
        marginBottom: 20,
        fontWeight: "bold",
        fontSize: 24,
        color: "black"
    },
    logo: {
        width: 200,
        height: 150,
        resizeMode: "contain",
        marginRight: "auto",
        marginLeft: "auto",
        marginBottom: -10
    }
})