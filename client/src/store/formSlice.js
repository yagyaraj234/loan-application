import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  project_name: "id",
  initialState: [],
  reducers: {
    setId: (state, action) => {
      if (state.length === 0) {
        state.push(action.payload);
      }
    },
  },
});

export const { setId } = formSlice.actions;
export default formSlice.reducer;
