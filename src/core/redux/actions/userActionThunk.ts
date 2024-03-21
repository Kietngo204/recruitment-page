import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  confirmPasswordReset,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../../firebase/firebase";
import { CredentialsLogin, CredentialsRegister } from "./interface";

// Action creator async để đăng nhập
export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }: CredentialsLogin) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      const user = response.user;
      const currentUser = user.providerData.map((profile) => {
        return profile;
      });
      return currentUser[0];
    } catch (error) {
      throw error;
    }
  },
);

export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ email, password, displayName, photoURL }: CredentialsRegister) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      const user = userCredential.user;
      const currentUser = user.providerData.map((profile) => {
        return profile;
      });
      if (userCredential && auth.currentUser) {
        await updateProfile(auth.currentUser, {
          displayName: displayName,
          photoURL: photoURL,
        });

        return currentUser[0];
      }
    } catch (error: any) {
      throw error;
    }
  },
);

// Action creator async để đăng xuất
export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    const response = await signOut(auth);
    return response;
  } catch (error) {
    throw error;
  }
});

// Action creator async theo dỗi trạng thái login và logout của user

export const passwordReset = createAsyncThunk(
  "auth/reset",
  async (email: string) => {
    try {
      const response = await sendPasswordResetEmail(auth, email);
      return response;
    } catch (error) {
      throw error;
    }
  },
);

export const confirmThePasswordReset = createAsyncThunk(
  "auth/confirm",
  async ({
    oobCode,
    newPassword,
  }: {
    oobCode: string;
    newPassword: string;
  }) => {
    try {
      if (!oobCode && !newPassword) {
        console.log("missing oobCode");
        return;
      }
      const response = await confirmPasswordReset(auth, oobCode, newPassword);
      return response;
    } catch (error) {
      throw error;
    }
  },
);
