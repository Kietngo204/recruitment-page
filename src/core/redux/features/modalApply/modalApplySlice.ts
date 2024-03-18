import { createSlice } from "@reduxjs/toolkit";

interface ModalApplyState {
  openApply: boolean;
}

const initialState: ModalApplyState = {
  openApply: false,
};

export const modalApplySlice = createSlice({
  name: "modalApply",
  initialState,
  reducers: {
    setOpenModalApply: (state) => {
      state.openApply = true;
    },
    setCloseModalApply: (state) => {
      state.openApply = false;
    },
  },
});

export const { setCloseModalApply, setOpenModalApply } =
  modalApplySlice.actions;

export default modalApplySlice.reducer;
