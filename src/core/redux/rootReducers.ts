import { combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./features/counter/counterSlice";
import userSlice from "./features/user/userSlice";
import modalSuccessSlice from "./features/modalSuccess/modalSuccessSlice";

export const rootReducer = combineReducers({
  count: counterSlice,
  user: userSlice,
  modalSuccess: modalSuccessSlice,
});
