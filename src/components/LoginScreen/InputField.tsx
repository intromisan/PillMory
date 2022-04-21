import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import React, { FC } from "react";
import { COLORS } from "../../constants";

const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;

const InputField: FC<TextInputProps> = ({
  onChangeText,
  value,
  onBlur,
  ...props
}) => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      value={value}
      onBlur={onBlur}
      {...props}
    />
  );
};

export default InputField;

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.textDark,
    color: COLORS.textDark,
    marginTop: screenHeight * 0.03,
    fontFamily: "Roboto-Regular",
  },
});
