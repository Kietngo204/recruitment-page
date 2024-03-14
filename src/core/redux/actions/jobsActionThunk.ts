import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/firebase";

export const getJobs = createAsyncThunk("jobs/getJobs", async () => {
  try {
    const response = await getDocs(collection(db, "jobs"));
    const jobsData = response
      ? Object.values(response.docs).map((doc: any) => doc.data())
      : [];
    return jobsData;
  } catch (error) {
    throw error;
  }
});
