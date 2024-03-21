import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import modalSuccessSlice from "./features/modalSuccess/modalSuccessSlice";
import examSlice from "./features/exam/examSlice";
import imagesSlice from "./features/images/imagesSlice";
import modalApplySlice from "./features/modalApply/modalApplySlice";
import jobSlice from "./features/jobs/jobSlice";
import optionSlice from "./features/option/optionSlice";
import menuSlice from "./features/menu/menuSlice";
import modalFilterSlice from "./features/modalFilter/modalFilterSlice";

export const rootReducer = combineReducers({
  user: userSlice,
  modalSuccess: modalSuccessSlice,
  exam: examSlice,
  images: imagesSlice,
  modalApply: modalApplySlice,
  jobs: jobSlice,
  option: optionSlice,
  menu: menuSlice,
  modalFilter: modalFilterSlice,
});
