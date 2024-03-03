import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Login from "./src/screens/Login";
import RNBootSplash from "react-native-bootsplash"
import SplashScreen from "./src/screens/SplashScreen";
import Register from "./src/screens/Register";
import Home from "./src/screens/Home";

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide({ fade: true })}>
      <Stack.Navigator screenOptions={{
        headerShown: false,
        statusBarColor: "transparent",
        statusBarTranslucent: true
      }}>
        <Stack.Screen name="Login" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


