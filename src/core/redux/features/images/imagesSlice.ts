import { createSlice } from "@reduxjs/toolkit";
import { getImages } from "../../actions/imagesActionThunk";

interface ImagesState {
  images: any;
  error: unknown;
}

const initialState: ImagesState = {
  images: null,
  error: null,
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
      })
      .addCase(getImages.fulfilled, (state, action: any) => {
        state.error = null;
        state.images = action.payload;
      })
      .addCase(getImages.rejected, (state, action: any) => {
        state.error = action.error?.message ?? "getImages error";
        state.images = null;
      });
  },
});
export default imagesSlice.reducer;
