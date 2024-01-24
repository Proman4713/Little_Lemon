import 'react-native-gesture-handler';
import * as React from "react"
import { Image } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons"

import WelcomeScreen from "./components/WelcomeScreen";
import MenuItems from "./components/MenuItems";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from '@react-navigation/drawer';
import LittleLemonFooter from './components/LittleLemonFooter';
import SubscribeScreen from './components/SubscribeScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator()

function LogoTitle() {
	return (
		<Image source={require('./assets/images/LittleLemonHeader.png')} style={{ height: 80, width: 300, resizeMode: 'contain', alignSelf: 'center', marginBottom: 10 }} />
	)
}

export default function App() {
	return (
		<>
			<NavigationContainer>
				<Drawer.Navigator
					backBehavior='history'
					screenOptions={({route}) => ({
						headerStyle: { backgroundColor: "#d1b126" },
						headerTitleStyle: { fontWeight: "bold", fontSize: 30 },
						swipeEdgeWidth: 300,
						drawerStyle: { backgroundColor: "#495E57" },
						drawerItemStyle: { borderRadius: 15 },
						drawerActiveTintColor: "#F4CE14",
						drawerInactiveTintColor: "#777777",
						drawerLabelStyle: { fontWeight: "bold", fontSize: 24 },
						drawerType: "front"
					})} >
					<Drawer.Screen name='Welcome' component={WelcomeScreen} options={{ headerTitle: (props) => <LogoTitle {...props} />, headerStyle: { backgroundColor: "#d1b126", height: 130 } }} />
					<Drawer.Screen name="Subscribe" component={SubscribeScreen} />
				</Drawer.Navigator>
				<LittleLemonFooter />
			</NavigationContainer>
		</>
	);
}