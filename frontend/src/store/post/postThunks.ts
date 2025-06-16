import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY, BASE_URL } from "../../apiConfig/apiConfig";
import type { IPostProps } from "../../interface/Interface";

interface IPostResponse {
  success: boolean;
  message: string;
  data?: unknown;
}

export const postThunk = createAsyncThunk<IPostResponse, IPostProps, {rejectValue: string;}>(
  "data/postResource",
  async ({ resource, formData }, thunkAPI) => {
    try {
      const response = await fetch(`${BASE_URL}/resource/${resource}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-bypass-token": API_KEY,
        },
        body: JSON.stringify({ data: [formData] }),
      });

      if (!response.ok) {
        return thunkAPI.rejectWithValue("დატა ვერ გაიგზავნა");
      }

      const data: IPostResponse = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("სერვერთან დაკავშირების შეცდომა");
    }
  }
);
