import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface OptionState {
  option: string;
}

const initialState: OptionState = {
  option: sessionStorage.getItem("option") || "enterprise",
};

export const OptionSlice = createSlice({
  name: "option",
  initialState,
  reducers: {
    setOption: (state, action: PayloadAction<string>) => {
      state.option = action.payload;
      sessionStorage.setItem("option", action.payload);
    },
  },
});

export const { setOption } = OptionSlice.actions;

export default OptionSlice.reducer;
