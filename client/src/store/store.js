import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
const store = configureStore({
  reducer: {
    auth: authReducer,
    // other reducers can be added here
  },
  // add middleware if needed
});

export default store;
