import { Dimensions } from "react-native";
import { COLORS } from ".";

const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;

const loginInput = {
  height: 50,
  borderBottomWidth: 1,
  borderBottomColor: COLORS.textDark,
  color: COLORS.textDark,
  marginTop: screenHeight * 0.03,
};

export default {
  loginInput,
};
