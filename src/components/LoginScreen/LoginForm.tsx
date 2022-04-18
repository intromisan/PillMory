import { StyleSheet, Text, View } from "react-native";
import { Dimensions } from "react-native";
import React from "react";
import { COLORS } from "../../constants";

const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;

const LoginForm = () => {
  return (
    <View style={styles.formContainer}>
      <Text>LoginForm</Text>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  formContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: screenWidth,
    height: screenHeight * 0.7,
    backgroundColor: COLORS.main,
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
    paddingHorizontal: screenWidth * 0.2,
    paddingTop: screenWidth * 0.2,
    paddingBottom: screenWidth * 0.1,
  },
});
