import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import WelcomeAccount from "../components/HomeScreen/WelcomeAccount";
import TodayPlan from "../components/HomeScreen/TodayPlan";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <WelcomeAccount />
      <TodayPlan />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});
