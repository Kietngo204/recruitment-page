import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/firebase";

export const getQuestion = createAsyncThunk("exam/getQuestion", async () => {
  try {
    const response = await getDocs(collection(db, "questions"));
    const questionsData = response
      ? Object.values(response.docs).map((doc: any) => doc.data())
      : [];
    return questionsData;
  } catch (error) {
    throw error;
  }
});
