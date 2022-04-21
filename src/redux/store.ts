import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./slices/authSlice";
import RemindersReducer from "./slices/reminders";

export const store = configureStore({
  reducer: {
    reminders: RemindersReducer,
    auth: AuthSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
