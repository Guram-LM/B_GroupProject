import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY, BASE_URL } from "../../apiConfig/apiConfig";
import type { IDeleteProps, IDeleteResponse } from "../../interface/Interface";



export const deleteThunk = createAsyncThunk<IDeleteProps, IDeleteResponse, { rejectValue: string }>(
    "/delete/item",
    async({ resource, id }, ThunkAPI) => {

        try {
            const res = await fetch(`${BASE_URL}/resource/${resource}/${id}`, {
                method: "DELETE",
                headers: {
                    "x-bypass-token": API_KEY,
                }
            })
            
            if(!res.ok) throw new Error("Delete failed");
            
            return ({id, resource})
            
        } catch (error) {
            if(error instanceof Error){
                return ThunkAPI.rejectWithValue("An error occurred while deleting")  
            }
            return ThunkAPI.rejectWithValue("შეცდომა წაშლის დროს")
        }

    }

)