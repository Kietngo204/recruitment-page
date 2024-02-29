import { createSlice } from "@reduxjs/toolkit";
import { login, logout } from "../../actions/userActionThunk";

interface UserState {
  user: string | null;
  isLoading: boolean;
  error: string | null;
}

const currentUser = localStorage.getItem("currentUser");
const user: string | null = currentUser ? JSON.parse(currentUser) : null;

const initialState: UserState = {
  user,
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    onSignIn: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("currentUser", JSON.stringify(action.payload));
    },
    onSignOut: (state) => {
      state.user = null;
      localStorage.removeItem("currentUser");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action: any) => {
        state.isLoading = false;
        state.error = null;
        localStorage.setItem("currentUser", JSON.stringify(action.payload));
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error?.message ?? "Login error";
      });
    builder
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
        localStorage.removeItem("currentUser");
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error?.message ?? "Logout error";
      });
  },
});

export const { onSignIn, onSignOut } = userSlice.actions;

export default userSlice.reducer;
