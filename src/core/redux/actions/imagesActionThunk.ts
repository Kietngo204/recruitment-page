import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/firebase";

export const getImages = createAsyncThunk("images/getImages", async () => {
  const response = await getDocs(collection(db, "images"));
  const imageData = response.docs.map((doc) => doc.data());
  return imageData[0];
});
