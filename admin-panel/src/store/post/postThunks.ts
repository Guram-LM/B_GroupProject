import { createAsyncThunk } from "@reduxjs/toolkit"
import { API_KEY, BASE_URL } from "../../apiConfig/apiConfig"
import type { IPostProps } from "../../interface/Interface"




export const postThunk = createAsyncThunk(
  "data/postResource",
  async ({ resource, formData }: IPostProps, thunkAPI) => {
    try {
      const response = await fetch(`${BASE_URL}/resource/${resource}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-bypass-token": API_KEY,
        },
        body: JSON.stringify({ data: [formData] }),
      })

      if (!response.ok) {
        return thunkAPI.rejectWithValue("დატა ვერ გაიგზავნა")
      }
    } catch (error) {
      return thunkAPI.rejectWithValue("სერვერთან დაკავშირების შეცდომა")
    }
  }
)
