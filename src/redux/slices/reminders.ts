import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface RemindersState {
  screenState: "today" | "upcoming";
}

export const remindersSlice = createSlice({
  name: "reminders",
  initialState: {
    screenState: "today",
  } as RemindersState,
  reducers: {
    onScreenStateChange: (
      state,
      action: PayloadAction<"today" | "upcoming">
    ) => {
      state.screenState = action.payload;
    },
  },
});

export const { onScreenStateChange } = remindersSlice.actions;

export default remindersSlice.reducer;
