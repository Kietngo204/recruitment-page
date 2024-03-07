import { createSlice } from "@reduxjs/toolkit";
import { getQuestion } from "../../actions/examActionThunk";

interface ExamProps {
  subject: string;
  questions: any;
  isLoading: boolean;
  error: string | null;
}

const initialState: ExamProps = {
  subject: "",
  questions: null,
  isLoading: false,
  error: null,
};

export const examSlice = createSlice({
  name: "exam",
  initialState,
  reducers: {
    onSetSubject: (state, action) => {
      state.subject = action.payload;
    },
    onRemoveSubject: (state) => {
      state.subject = "";
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getQuestion.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getQuestion.fulfilled, (state, action: any) => {
        state.isLoading = false;
        state.error = null;
        state.questions = action.payload;
      })
      .addCase(getQuestion.rejected, (state, action: any) => {
        state.isLoading = false;
        state.error = action.error?.message ?? "getQuestion error";
        state.questions = [];
      });
  },
});

export const { onSetSubject } = examSlice.actions;

export default examSlice.reducer;
