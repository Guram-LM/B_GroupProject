import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY, BASE_URL } from "../../apiConfig/apiConfig";
import type { IupdataProps, IUpdateResponse } from "../../interface/Interface";




export const updateThunk = createAsyncThunk<IUpdateResponse, IupdataProps, { rejectValue: string }>(
  "data/update",
  async ({ id, updatedData, resource }, ThunkAPI) => {
    try {

      const res = await fetch(`${BASE_URL}/resource/${resource}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-bypass-token": API_KEY,
        },
        body: JSON.stringify({data:[updatedData]}),
      });

      if (!res.ok) throw new Error("განახლება ვერ მოხერხდა");

      const result = await res.json();

      return { id, data: result, resource };
    } catch (error) {
        if(error instanceof Error){
            return ThunkAPI.rejectWithValue(error.message);
        }

        return ThunkAPI.rejectWithValue("შეცდომა განახლებაში");
    }
  }
);