import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/LoginScreen";
import NavigationTabs from "./NavigationTabs";

const AppNavigation = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const Stack = createNativeStackNavigator();

  return (
    // <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isSignedIn ? (
        <Stack.Screen name="App" component={NavigationTabs} />
      ) : (
        <Stack.Screen name="SignIn" component={LoginScreen} />
      )}
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default AppNavigation;

const styles = StyleSheet.create({});
