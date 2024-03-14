import { createSlice } from "@reduxjs/toolkit";
import { getJobs } from "../../actions/jobsActionThunk";

interface JobsState {
  jobs: any;
  error: unknown;
}

const initialState: JobsState = {
  jobs: null,
  error: null,
};

export const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getJobs.pending, (state) => {
        state.error = null;
        state.jobs = null;
      })
      .addCase(getJobs.fulfilled, (state, action: any) => {
        state.jobs = action.payload;
        state.error = null;
      })
      .addCase(getJobs.rejected, (state, action: any) => {
        state.error = action.error?.message ?? "getIJobs error";
        state.jobs = null;
      });
  },
});

export default jobsSlice.reducer;
