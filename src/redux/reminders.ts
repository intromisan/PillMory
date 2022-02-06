import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface RemindersState {
  screenShown: "today" | "upcoming";
}

const initialState: RemindersState = {
  screenShown: "today",
};

export const remindersSlice = createSlice({
  name: "reminders",
  initialState,
  reducers: {
    onScreenShownChange: (
      state,
      action: PayloadAction<"today" | "upcoming">
    ) => {
      state.screenShown = action.payload;
    },
  },
});

export const { onScreenShownChange } = remindersSlice.actions;

export default remindersSlice.reducer;
