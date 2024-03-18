import { createSlice } from "@reduxjs/toolkit";

interface MenuState {
  open: boolean;
}

const initialState: MenuState = {
  open: false,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setMenuOpen: (state) => {
      state.open = true;
    },
    setMenuClose: (state) => {
      state.open = false;
    },
  },
});

export const { setMenuClose, setMenuOpen } = menuSlice.actions;

export default menuSlice.reducer;
