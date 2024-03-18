import { combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./features/counter/counterSlice";
import userSlice from "./features/user/userSlice";
import modalSuccessSlice from "./features/modalSuccess/modalSuccessSlice";
import examSlice from "./features/exam/examSlice";
import imagesSlice from "./features/images/imagesSlice";
import modalApplySlice from "./features/modalApply/modalApplySlice";
import jobSlice from "./features/jobs/jobSlice";
import optionSlice from "./features/option/optionSlice";
import menuSlice from "./features/menu/menuSlice";

export const rootReducer = combineReducers({
  count: counterSlice,
  user: userSlice,
  modalSuccess: modalSuccessSlice,
  exam: examSlice,
  images: imagesSlice,
  modalApply: modalApplySlice,
  jobs: jobSlice,
  option: optionSlice,
  menu: menuSlice,
});
