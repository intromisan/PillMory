import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { FC } from "react";
import { COLORS } from "../../constants";

interface DayComponentProps {
  id: string;
  name: string;
  dose: string;
}

const DayComponent: FC<DayComponentProps> = ({ id, name, dose }) => {
  return (
    <View style={styles.medicationContainer} key={id}>
      <View style={styles.medicationInfo}>
        <Text style={styles.medicationTitle}>{name}</Text>
        <Text style={styles.medicationDose}>{dose}</Text>
      </View>
      <TouchableOpacity style={styles.completeButton}>
        <Text>Complete now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DayComponent;

const styles = StyleSheet.create({
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
