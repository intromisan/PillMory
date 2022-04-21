import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants";

import SignInForm from "../components/LoginScreen/SignInForm";
import { LinearGradient } from "expo-linear-gradient";
import { useAppSelector } from "../hooks";
import SignUpForm from "../components/LoginScreen/SignUpForm";

const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;

const LoginScreen = () => {
  const authScreen = useAppSelector((state) => state.auth.authScreen);

  return (
    <SafeAreaView style={styles.screenContainer}>
      {authScreen === "signUp" ? (
        <LinearGradient
          colors={[COLORS.secondary, COLORS.accent]}
          style={styles.background}
          locations={[0.8, 0.8]}
        />
      ) : (
        <LinearGradient colors={[COLORS.secondary]} style={styles.background} />
      )}
      {authScreen === "signIn" && <View style={styles.bubble} />}
      {authScreen === "signIn" ? <SignInForm /> : <SignUpForm />}
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    width: screenWidth,
    height: screenHeight,
  },
  bubble: {
    backgroundColor: COLORS.accent,
    width: screenWidth,
    height: screenHeight * 0.23,
    position: "absolute",
    top: 0,
    left: 0,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    borderTopRightRadius: 100,
  },
});
