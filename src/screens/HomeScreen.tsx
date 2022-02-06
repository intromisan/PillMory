import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import WelcomeAccount from "../components/HomeScreen/WelcomeAccount";
import TodayPlan from "../components/HomeScreen/TodayPlan";
import PillsPerDay from "../components/HomeScreen/PillsPerDay";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <WelcomeAccount />
      <TodayPlan />
      <PillsPerDay />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "#5e51e9",
  },
});
