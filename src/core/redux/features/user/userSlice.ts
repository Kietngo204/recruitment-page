import { createSlice } from "@reduxjs/toolkit";
import {
  confirmThePasswordReset,
  login,
  logout,
  passwordReset,
  registerUser,
} from "../../actions/userActionThunk";

interface UserState {
  id: string;
  displayName: string;
  email: string;
  photoURL: string;
  emailVerified: boolean;
}

interface UserInitialState {
  user: UserState | null;
  isLoading: boolean;
  error: string | null;
  errorRegister: string | null;
  emailMessage: boolean;
}

const currentUser = localStorage.getItem("currentUser");
const user: UserState | null = currentUser ? JSON.parse(currentUser) : null;

const initialState: UserInitialState = {
  user: user || null,
  isLoading: false,
  error: null,
  errorRegister: null,
  emailMessage: false,
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
        state.user = action.payload;
        localStorage.setItem("currentUser", JSON.stringify(action.payload));
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error?.code ?? "Login error";
        state.user = null;
        localStorage.removeItem("currentUser");
      });
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.errorRegister = null;
      })
      .addCase(registerUser.fulfilled, (state, action: any) => {
        state.isLoading = false;
        state.errorRegister = null;
        state.user = action.payload;
        localStorage.setItem("currentUser", JSON.stringify(action.payload));
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.errorRegister = action.error?.code ?? "Register error";
        state.user = null;
        localStorage.removeItem("currentUser");
      });
    builder
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
        state.user = null;
        localStorage.removeItem("currentUser");
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.error = action.error?.code ?? "Logout error";
      });
    builder
      .addCase(passwordReset.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(passwordReset.fulfilled, (state) => {
        state.emailMessage = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(passwordReset.rejected, (state, action: any) => {
        state.emailMessage = false;
        state.isLoading = false;
        state.error = action.error?.code ?? "User not found, try again!";
      });
    builder
      .addCase(confirmThePasswordReset.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(confirmThePasswordReset.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(confirmThePasswordReset.rejected, (state, action: any) => {
        state.isLoading = false;
        state.error = action.error?.code ?? "confirm Password error";
      });
  },
});

export const { onSignIn, onSignOut } = userSlice.actions;

export default userSlice.reducer;
