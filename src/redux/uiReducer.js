import { createSlice } from "@reduxjs/toolkit";

const uiReducer = createSlice({
  name: 'ui',
  initialState: {
    show: false,
  },
  reducers: {
    showSide(state) {
      state.show = !state.show
    }
  }
})

export const uiActions = uiReducer.actions

export default uiReducer.reducer;