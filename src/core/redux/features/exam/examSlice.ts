import { createSlice } from "@reduxjs/toolkit";
import { getQuestion } from "../../actions/examActionThunk";

export interface QuestionType {
  question: string;
  options: string[];
}

interface ExamProps {
  subject: string;
  questions: QuestionType[] | [];
  isLoading: boolean;
  error: string | null;
  openSubmitTest: boolean;
}

const initialState: ExamProps = {
  subject: "",
  questions: [],
  isLoading: false,
  error: null,
  openSubmitTest: false,
};

export const examSlice = createSlice({
  name: "exam",
  initialState,
  reducers: {
    onSetSubject: (state, action) => {
      state.subject = action.payload;
    },
    onOpenModalSubmitTest: (state) => {
      state.openSubmitTest = true;
    },
    onCloseModalSubmitTest: (state) => {
      state.openSubmitTest = false;
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
        state.error = action.error?.code ?? "getQuestion error";
        state.questions = [];
        state.isLoading = false;
      });
  },
});

export const { onSetSubject, onCloseModalSubmitTest, onOpenModalSubmitTest } =
  examSlice.actions;

export default examSlice.reducer;
