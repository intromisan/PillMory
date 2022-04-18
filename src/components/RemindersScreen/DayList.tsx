import { FC } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Medication } from "../../types/interfaces";
import { Dimensions } from "react-native";
import { COLORS } from "../../constants";

const { width } = Dimensions.get("window");

interface DayListProps {
  date: string;
  medicationList: Medication[];
}

const DayList: FC<DayListProps> = ({ date, medicationList }) => {
  return (
    <View style={styles.componentContainer}>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.listContainer}>
        <FlatList
          data={medicationList}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.medicationContainer} key={item.id}>
                <View style={styles.medicationInfo}>
                  <Text style={styles.medicationTitle}>{item.name}</Text>
                  <Text style={styles.medicationDose}>{item.dose}</Text>
                </View>
                <TouchableOpacity style={styles.completeButton}>
                  <Text>Complete now</Text>
                </TouchableOpacity>
              </View>
            );
          }}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
    </View>
  );
};

export default DayList;

const styles = StyleSheet.create({
  componentContainer: {
    width: width * 0.85,
    alignSelf: "center",
    marginBottom: 30,
  },
  date: {
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.textDark,
  },
  listContainer: {
    marginTop: 20,
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: COLORS.main,
    borderRadius: 15,
  },
  separator: {
    borderWidth: 2,
    borderStyle: "dotted",
    borderRadius: 1,
    marginVertical: 20,
  },
  medicationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  medicationInfo: {
    flex: 2,
  },
  medicationTitle: {
    fontSize: 20,
    fontWeight: "700",
  },
  medicationDose: {
    fontWeight: "700",
    color: COLORS.textDark,
  },
  completeButton: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    backgroundColor: COLORS.white,
  },
});
