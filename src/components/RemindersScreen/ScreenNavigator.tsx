import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const ScreenNavigator = () => {
  return (
    <View style={styles.screenNavigator}>
      <View style={styles.screenNavigatorItem}>
        <Text>Today</Text>
      </View>
      <View style={styles.screenNavigatorItem}>
        <Text>Upcoming</Text>
      </View>
      <View style={styles.activeBlock} />
    </View>
  );
};

export default ScreenNavigator;

const styles = StyleSheet.create({
  screenNavigator: {
    backgroundColor: COLORS.backgroundLightColor,
    marginHorizontal: width * 0.08,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
    position: "relative",
    height: 40,
    borderRadius: 5,
  },
  screenNavigatorItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 4,
  },
  activeBlock: {
    position: "absolute",
    backgroundColor: "#ffffff",
    top: 5,
    left: 3.5,
    width: (width - width * 0.16) / 2 - 10,
    height: 30,
    zIndex: 3,
    borderRadius: 5,
    shadowColor: "#ccccd6",
    shadowOffset: {
      width: -1,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 10,
  },
});
