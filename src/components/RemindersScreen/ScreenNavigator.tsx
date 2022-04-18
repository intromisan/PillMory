import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants";
import { Dimensions } from "react-native";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { onScreenStateChange } from "../../redux/slices/reminders";

const { width, height } = Dimensions.get("window");

const ScreenNavigator = () => {
  const screenState = useAppSelector((state) => state.reminders.screenState);
  const dispatch = useAppDispatch();

  const activeBlockClasses = [
    styles.activeBlock,
    screenState === "today"
      ? styles.activeBlockToday
      : styles.activeBlockUpcoming,
  ];

  const screenStateChangeHandler = (state: "today" | "upcoming") => {
    dispatch(onScreenStateChange(state));
  };

  return (
    <View style={styles.screenNavigator}>
      <TouchableWithoutFeedback
        onPress={() => screenStateChangeHandler("today")}
      >
        <View style={styles.screenNavigatorItem}>
          <Text>Today</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => screenStateChangeHandler("upcoming")}
      >
        <View style={styles.screenNavigatorItem}>
          <Text>Upcoming</Text>
        </View>
      </TouchableWithoutFeedback>
      <View style={activeBlockClasses} />
    </View>
  );
};

export default ScreenNavigator;

const styles = StyleSheet.create({
  screenNavigator: {
    backgroundColor: COLORS.backgroundLightColor,
    width: width * 0.85,
    alignSelf: "center",
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
    elevation: 5,
  },
  activeBlock: {
    position: "absolute",
    backgroundColor: "#ffffff",
    top: 5,
    width: (width * 0.85) / 2 - 10,
    height: 30,
    elevation: 3,
    zIndex: 3,
    borderRadius: 5,
    shadowColor: "#ccccd6",
    shadowOffset: {
      width: -1,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 3,
  },
  activeBlockToday: {
    left: 3.5,
  },
  activeBlockUpcoming: {
    right: 3.5,
  },
});
