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
import DayComponent from "./DayComponent";

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
          renderItem={({ item }) => {
            return <DayComponent {...item} />;
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
});
