import { createSlice } from "@reduxjs/toolkit";
import { getImages } from "../../actions/imagesActionThunk";

interface ImagesState {
  images: any;
  error: unknown;
  isLoading: boolean;
}

const initialState: ImagesState = {
  images: null,
  error: null,
  isLoading: false,
};

export const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getImages.pending, (state) => {
        state.error = null;
        state.images = null;
        state.isLoading = true;
      })
      .addCase(getImages.fulfilled, (state, action: any) => {
        state.error = null;
        state.images = action.payload;
        state.isLoading = false;
      })
      .addCase(getImages.rejected, (state, action: any) => {
        state.error = action.error?.message ?? "getImages error";
        state.images = null;
        state.isLoading = false;
      });
  },
});
export default imagesSlice.reducer;
