import { createSlice } from "@reduxjs/toolkit";

const uiReducer = createSlice({
  name: 'ui',
  initialState: {
    show: false,
    activeUz: true,
    activeRu: false,
    index: 1,
    errorMessage: null
  },
  reducers: {
    showSide(state) {
      state.show = !state.show
    },
    showActiveUz(state, action) {
      state.activeUz = !state.activeUz
      state.activeRu = false
    },
    showActiveRu(state) {
      state.activeUz = false
      state.activeRu = true
    },
    nextHandler(state, action) {
      state.index += action.payload;
    },
    prevHandler(state, action) {
      state.index -= action.payload;
    },
    resetHandler(state, action) {
      state.index = action.payload;
    },
    errorMessage(state, action) {
      state.errorMessage = action.payload
    }
  }
})

export const uiActions = uiReducer.actions

export default uiReducer.reducer;