import { createSlice } from "@reduxjs/toolkit";

const auth = createSlice({
  name: "auth",
  initialState: false,
  reducers: {
    setAuth: (state) => !state,
  },
});

export const { setAuth } = auth.actions;
export default auth.reducer;
