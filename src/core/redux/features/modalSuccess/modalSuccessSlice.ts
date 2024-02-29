import { createSlice } from "@reduxjs/toolkit";
interface ModalSuccessState {
  open: boolean;
  title: string;
  button: string;
  titleSecond: string;
  navigate: string;
}

const initialState: ModalSuccessState = {
  open: false,
  title: "",
  button: "",
  titleSecond: "",
  navigate: "",
};

export const modalSuccessSlice = createSlice({
  name: "modalSuccess",
  initialState,
  reducers: {
    showModal: (state, action) => {
      const { title, button, titleSecond, navigate } = action.payload;
      state.open = true;
      state.title = title;
      state.titleSecond = titleSecond;
      state.button = button;
      state.navigate = navigate;
    },

    handleCancel: (state) => {
      state.open = false;
    },
  },
});

export const { handleCancel, showModal } = modalSuccessSlice.actions;

export default modalSuccessSlice.reducer;
