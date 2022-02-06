import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { ProgressChart } from "react-native-chart-kit";

const { width, height } = Dimensions.get("window");

const TodayPlan = () => {
  return (
    <View style={styles.componentContainer}>
      <View style={styles.left}>
        <Text style={styles.mainText}>Your plan for today</Text>
        <Text style={styles.secondaryText}>2 of 4 completed</Text>
        <Text style={styles.link}>Show more</Text>
      </View>
      <View style={styles.right}>
        <ProgressChart
          data={[0.5]}
          width={height * 0.18}
          height={190}
          radius={60}
          hideLegend
          strokeWidth={7}
          chartConfig={{
            backgroundGradientFromOpacity: 0,
            backgroundGradientToOpacity: 0,
            color: (opacity = 1) => `rgba(233,240,255, ${opacity})`,
          }}
          style={{ alignSelf: "flex-end" }}
        />
        <View style={styles.chartPercentage}>
          <Text style={{ fontSize: 32, color: "white" }}>50%</Text>
        </View>
      </View>
    </View>
  );
};

export default TodayPlan;

const styles = StyleSheet.create({
  componentContainer: {
    height: 190,
    paddingHorizontal: width * 0.08,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  left: {
    paddingVertical: 20,
    width: height * 0.18,
    paddingLeft: 10,
  },
  right: {
    width: height * 0.18,
    position: "relative",
  },
  chartPercentage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  mainText: {
    fontSize: 28,
    fontWeight: "500",
    color: "#e9f0ff",
  },
  secondaryText: {
    fontSize: 16,
    marginTop: 10,
    color: "#e9f0ff",
  },
  link: {
    fontSize: 18,
    textDecorationLine: "underline",
    marginTop: "auto",
    color: "#e9f0ff",
  },
});
