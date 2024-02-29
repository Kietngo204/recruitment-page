import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../../firebase/firebase";

interface Credentials {
  email: string;
  password: string;
}

// Action creator async để đăng nhập
export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }: Credentials) => {
    await signInWithEmailAndPassword(auth, email, password);
    return auth.currentUser?.uid;
  },
);

// Action creator async để đăng xuất
export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    const response = await signOut(auth);
    return response;
  } catch (error) {
    return error;
  }
});

// Action creator async theo dỗi trạng thái login và logout của user
