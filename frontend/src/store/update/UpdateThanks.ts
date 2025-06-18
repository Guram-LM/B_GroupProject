
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { IupdataProps, IUpdateResponse } from "../../interface/Interface";
import { API_KEY, BASE_URL } from "../../apiConfig/apiConfig";


export const updateThunk = createAsyncThunk<IUpdateResponse, IupdataProps, { rejectValue: string }>(
  "data/update",
  async ({ id, updatedData, resource }, ThunkAPI) => {
    try {

      const body = {
        data: updatedData,
      };

      const res = await fetch(`${BASE_URL}/resource/${resource}/${id}`, {
        
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-bypass-token": API_KEY,
        },
        body: JSON.stringify(body),
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