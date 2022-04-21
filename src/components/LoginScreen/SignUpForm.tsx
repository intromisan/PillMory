import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { AntDesign } from "@expo/vector-icons";

import { COLORS } from "../../constants";
import DismissKeyboardView from "../../shared/HOC/DismissKeyboardView";
import InputField from "./InputField";
import { useAppDispatch } from "../../hooks";
import {
  authHandler,
  changeAuthScreenHandler,
} from "../../redux/slices/authSlice";

const screenHeight = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("screen").width;

type FormData = {
  name: string;
  email: string;
  password: string;
};

const SignUpForm = () => {
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>();

  const submitHandler = handleSubmit((data) => {
    dispatch(authHandler());
  });

  return (
    <DismissKeyboardView style={styles.formContainer}>
      <Text style={styles.screenTitle}>Create Account</Text>
      <View style={styles.inputsContainer}>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value, onBlur } }) => {
            return (
              <InputField
                onChangeText={onChange}
                value={value}
                onBlur={onBlur}
                placeholder="Name"
                placeholderTextColor={COLORS.textDark}
              />
            );
          }}
        />
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value, onBlur } }) => {
            return (
              <InputField
                onChangeText={onChange}
                value={value}
                onBlur={onBlur}
                placeholder="Email"
                placeholderTextColor={COLORS.textDark}
                autoCapitalize={"none"}
                keyboardType={"email-address"}
              />
            );
          }}
        />
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value, onBlur } }) => {
            return (
              <InputField
                onChangeText={onChange}
                value={value}
                onBlur={onBlur}
                placeholder="Password"
                placeholderTextColor={COLORS.textDark}
                autoCapitalize={"none"}
                secureTextEntry={true}
              />
            );
          }}
        />
      </View>

      <View style={styles.submitContainer}>
        <TouchableWithoutFeedback onPress={submitHandler}>
          <Text style={styles.submitText}>Sign up</Text>
        </TouchableWithoutFeedback>
        <TouchableOpacity style={styles.submitButton} onPress={submitHandler}>
          <AntDesign name="arrowright" size={32} color={COLORS.main} />
        </TouchableOpacity>
      </View>

      <Text
        style={styles.switchScreenButton}
        onPress={() => dispatch(changeAuthScreenHandler("signIn"))}
      >
        Sign in
      </Text>
    </DismissKeyboardView>
  );
};

export default SignUpForm;

const styles = StyleSheet.create({
  formContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: screenWidth,
    height: screenHeight * 0.7,
    backgroundColor: COLORS.main,
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
    paddingHorizontal: screenWidth * 0.15,
    paddingTop: screenWidth * 0.15,
    paddingBottom: screenWidth * 0.1,
  },
  screenTitle: {
    fontFamily: "Miedinger-Bold",
    fontSize: 32,
    marginBottom: screenHeight * 0.02,
    color: COLORS.textDark,
  },
  inputsContainer: {
    height: screenHeight * 0.3,
  },
  submitContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: screenHeight * 0.025,
  },
  submitText: {
    fontFamily: "Roboto-Bold",
    fontSize: 28,
    color: COLORS.textDark,
  },
  submitButton: {
    height: 80,
    width: 80,
    backgroundColor: COLORS.darkAccent,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  switchScreenButton: {
    textDecorationStyle: "solid",
    textDecorationLine: "underline",
  },
});
