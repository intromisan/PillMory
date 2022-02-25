import {
  StyleSheet,
  Text,
  SafeAreaView,
  Dimensions,
  ScrollView,
  FlatList,
  View,
} from "react-native";
import React from "react";
import { COLORS } from "../constants";
import ScreenNavigator from "../components/RemindersScreen/ScreenNavigator";
import DayList from "../components/RemindersScreen/DayList";

const { width, height } = Dimensions.get("window");

const reminders = [
  {
    id: "qweqwe",
    date: "Tue, Jan 21",
    medicationList: [
      {
        id: "1asda1",
        name: "Spasmalgon, 50g",
        dose: "2 pills, after food",
      },
      {
        id: "1as123a",
        name: "Paracetamol, 20g",
        dose: "1 pills, before breakfast",
      },
    ],
  },
  {
    id: "13rv1",
    date: "Wed, Jan 22",
    medicationList: [
      {
        id: "1asda1",
        name: "Spasmalgon, 50g",
        dose: "2 pills, after food",
      },
      {
        id: "1as123a",
        name: "Paracetamol, 20g",
        dose: "1 pills, before breakfast",
      },
    ],
  },
  {
    id: "sdfhw",
    date: "Thu, Jan 23",
    medicationList: [
      {
        id: "1asda1",
        name: "Spasmalgon, 50g",
        dose: "2 pills, after food",
      },
      {
        id: "1as123a",
        name: "Paracetamol, 20g",
        dose: "1 pills, before breakfast",
      },
    ],
  },
  {
    id: "zxcga",
    date: "Fri, Jan 24",
    medicationList: [
      {
        id: "1asda1",
        name: "Spasmalgon, 50g",
        dose: "2 pills, after food",
      },
      {
        id: "1as123a",
        name: "Paracetamol, 20g",
        dose: "1 pills, before breakfast",
      },
    ],
  },
];

const RemindersScreen = () => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <Text style={styles.screenTitle}>Reminders</Text>
      <ScreenNavigator />
      <View style={{ flex: 1, marginBottom: height * 0.08, marginTop: 30 }}>
        <FlatList
          data={reminders}
          renderItem={({ item }) => (
            <DayList
              key={item.id}
              date={item.date}
              medicationList={item.medicationList}
            />
          )}
        />
      </View>
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
    width: width * 0.85,
    alignSelf: "center",
    fontSize: 28,
    fontWeight: "500",
    color: COLORS.textLight,
  },
});
