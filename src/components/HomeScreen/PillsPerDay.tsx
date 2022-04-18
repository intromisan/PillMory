import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Dimensions } from "react-native";
import { COLORS } from "../../constants";

const { width, height } = Dimensions.get("window");

interface CalendarItemProps {
  isActive?: boolean;
  pillAmount: number;
  date: number;
  weekDay: string;
}

const CalendarItem = ({
  isActive,
  pillAmount,
  date,
  weekDay,
}: CalendarItemProps) => {
  return (
    <View
      style={[styles.calendarItem, isActive ? styles.calendarItemActive : null]}
    >
      <View style={styles.dayContainer}>
        <Text style={[styles.day, isActive ? styles.dayActive : null]}>
          {date}
        </Text>
      </View>
      <Text
        style={
          isActive
            ? { ...styles.weekDay, color: "white" }
            : { ...styles.weekDay, color: "black" }
        }
      >
        {weekDay}
      </Text>
      <View style={styles.pillsContainer}>
        {pillAmount > 0
          ? [...Array(pillAmount)].map((pill, i) => (
              <View
                style={
                  isActive
                    ? { ...styles.pillPerDay, backgroundColor: "#ffffff" }
                    : {
                        ...styles.pillPerDay,
                        backgroundColor: pillBackgroundGenerator(),
                      }
                }
                key={i}
              />
            ))
          : null}
        {/* [
                  styles.pillPerDay,
                  isActive ? styles.pillPerDayActive : null,
                ] */}
      </View>
    </View>
  );
};

const PillsPerDay = () => {
  return (
    <View style={styles.componentContainer}>
      <Text style={styles.componentHeader}>February, 2022</Text>
      <View style={styles.calendar}>
        <CalendarItem pillAmount={3} date={4} weekDay={"Fri"} />
        <CalendarItem pillAmount={1} date={5} weekDay={"Sat"} />
        <CalendarItem isActive pillAmount={2} date={6} weekDay={"Sun"} />
        <CalendarItem pillAmount={0} date={7} weekDay={"Mon"} />
        <CalendarItem pillAmount={2} date={8} weekDay={"Tue"} />
      </View>
    </View>
  );
};

export default PillsPerDay;

const pillBackgroundGenerator = () => {
  const number = Math.floor(Math.random() * 3);
  switch (number) {
    case 0:
      return "#2921CB";
    case 1:
      return "#9C59E8";
    case 2:
      return "#68a973";

    default:
      break;
  }
};

const styles = StyleSheet.create({
  componentContainer: {
    backgroundColor: COLORS.main,
    color: COLORS.textDark,
    position: "absolute",
    bottom: 0,
    height: height * 0.42,
    width: width,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    paddingHorizontal: width * 0.08,
    paddingTop: height * 0.05,
  },
  componentHeader: {
    fontSize: 28,
    fontWeight: "600",
  },
  calendar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: height * 0.04,
  },
  calendarItem: {
    width: width / 5 - 20,
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 30,
  },
  calendarItemActive: {
    backgroundColor: COLORS.accent,
  },
  dayContainer: {
    backgroundColor: "#ffffff",
    width: 40,
    height: 40,
    borderRadius: 80,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  day: {
    color: "black",
    fontWeight: "500",
  },
  dayActive: {
    color: COLORS.accent,
    fontWeight: "500",
  },
  weekDay: {
    fontWeight: "500",
    fontSize: 12,
  },
  pillsContainer: {
    marginTop: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    maxWidth: 30,
    justifyContent: "center",
  },
  pillPerDay: {
    width: 5,
    height: 5,
    borderRadius: 10,
    margin: 2,
  },
});
