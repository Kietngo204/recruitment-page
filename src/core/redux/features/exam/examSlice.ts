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
        state.error = null;
        state.isLoading = true;
      })
      .addCase(getQuestion.fulfilled, (state, action: any) => {
        state.error = null;
        state.questions = action.payload;
        state.isLoading = false;
      })
      .addCase(getQuestion.rejected, (state, action: any) => {
        state.error = action.error?.message ?? "getQuestion error";
        state.questions = [];
        state.isLoading = false;
      });
  },
});

export const { onSetSubject } = examSlice.actions;

export default examSlice.reducer;
