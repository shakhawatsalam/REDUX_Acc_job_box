import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import apiSlice from "../features/api/apiSlice";

const store = configureStore({
  reducer: {
    api: apiSlice.reducer,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
