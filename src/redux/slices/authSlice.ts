import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthSliceState {
  authScreen: "signIn" | "signUp";
}

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    authScreen: "signUp",
  } as AuthSliceState,
  reducers: {
    changeAuthScreenHandler: (
      state,
      action: PayloadAction<"signIn" | "signUp">
    ) => {
      state.authScreen = action.payload;
    },
  },
});

export const { changeAuthScreenHandler } = authSlice.actions;

export default authSlice.reducer;
