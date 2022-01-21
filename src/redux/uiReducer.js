import { createSlice } from "@reduxjs/toolkit";

const uiReducer = createSlice({
  name: 'ui',
  initialState: {
    show: false,
    activeUz: false,
    activeRu: false,
  },
  reducers: {
    showSide(state) {
      state.show = !state.show
    },
    showActiveUz(state, action) {
      state.activeUz = true
      state.activeRu = false
    },
    showActiveRu(state) {
      state.activeUz = false
      state.activeRu = true
    }
  }
})

export const uiActions = uiReducer.actions

export default uiReducer.reducer;