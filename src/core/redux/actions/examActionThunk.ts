import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/firebase";

export const getQuestion = createAsyncThunk("exam/getQuestion", async () => {
  const response = await getDocs(collection(db, "questions"));
  return response;
});
