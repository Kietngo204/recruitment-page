import { createSlice } from "@reduxjs/toolkit";

interface ModalFilterState {
  openFilter: boolean;
}

const initialState: ModalFilterState = {
  openFilter: false,
};

export const modalFilterSlice = createSlice({
  name: "modalFilter",
  initialState,
  reducers: {
    setOpenModalFilter: (state) => {
      state.openFilter = true;
    },
    setCloseModalFilter: (state) => {
      state.openFilter = false;
    },
  },
});

export const { setCloseModalFilter, setOpenModalFilter } =
  modalFilterSlice.actions;

export default modalFilterSlice.reducer;
