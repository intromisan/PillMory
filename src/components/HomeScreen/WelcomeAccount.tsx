import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { images } from "../../constants";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const WelcomeAccount = () => {
  return (
    <View style={styles.componentContainer}>
      <Image
        source={images.avatar}
        style={styles.avatar}
        resizeMethod="resize"
      />
      <Text style={styles.welcomeText}>Hello Jane</Text>
    </View>
  );
};

export default WelcomeAccount;

const styles = StyleSheet.create({
  componentContainer: {
    display: "flex",
    width: width,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  welcomeText: {
    fontSize: 28,
    marginTop: 15,
  },
});
