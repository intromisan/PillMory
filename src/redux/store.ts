import { configureStore } from "@reduxjs/toolkit";
import RemindersReducer from "./reminders";

export const store = configureStore({
  reducer: {
    reminders: RemindersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
