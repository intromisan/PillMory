import { StyleSheet, Text, SafeAreaView, Dimensions } from "react-native";
import React from "react";
import { COLORS } from "../constants";
import ScreenNavigator from "../components/RemindersScreen/ScreenNavigator";

const { width, height } = Dimensions.get("window");

const RemindersScreen = () => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <Text style={styles.screenTitle}>Reminders</Text>
      <ScreenNavigator />
    </SafeAreaView>
  );
};

export default RemindersScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.backgroundColor,
  },
  screenTitle: {
    marginTop: height * 0.04,
    marginLeft: width * 0.08,
    fontSize: 28,
    fontWeight: "500",
    color: COLORS.textLight,
  },
});
