import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthSliceState {
  authScreen: "signIn" | "signUp";
  isAuth: boolean;
}

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    authScreen: "signUp",
    isAuth: false,
  } as AuthSliceState,
  reducers: {
    changeAuthScreenHandler: (
      state,
      action: PayloadAction<"signIn" | "signUp">
    ) => {
      state.authScreen = action.payload;
    },
    authHandler: (state) => {
      state.isAuth = !state.isAuth;
    },
  },
});

export const { changeAuthScreenHandler, authHandler } = authSlice.actions;

export default authSlice.reducer;
