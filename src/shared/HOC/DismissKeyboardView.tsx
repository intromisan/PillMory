import {
  Keyboard,
  StyleProp,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";

type CompType = {
  children: React.ReactNode;
  style: any;
};

const DismissKeyboardView = ({ children, style }: CompType) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={style}>{children}</View>
    </TouchableWithoutFeedback>
  );
};

// const DismissKeyboardView = DismissKeyboardHOC(View);

export default DismissKeyboardView;
