import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { appState } from "../../types/common/redux";

const initialState: appState = {
  appState: "",
};

export const appStateSlice = createSlice({
  name: "appState",
  initialState,
  reducers: {
    setAppState: (state, action: PayloadAction<string>) => {
      state.appState = action.payload;
    },
  },
});

export const { setAppState } = appStateSlice.actions;

export default appStateSlice.reducer;
