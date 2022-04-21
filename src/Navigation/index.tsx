import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import NavigationTabs from "./NavigationTabs";
import { useAppSelector } from "../hooks";

const AppNavigation = () => {
  const Stack = createNativeStackNavigator();

  const { isAuth } = useAppSelector((state) => state.auth);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isAuth ? (
        <Stack.Screen name="App" component={NavigationTabs} />
      ) : (
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
};

export default AppNavigation;
