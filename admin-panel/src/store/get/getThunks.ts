import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_KEY, BASE_URL } from "../../apiConfig/apiConfig";
import type { IAnimals, Ikategory, IResource, IRowDataAnimals, IRowDataKategory} from "../../interface/Interface";




export const featchAnimals = createAsyncThunk(
    "/animals/GET",
    async ({resource}: IResource, thunkAPI) => {
        try {
            const rouData = await fetch(`${BASE_URL}/resource/${resource}`, {
            method: "GET",
            headers: {
                "x-bypass-token": API_KEY,
            }  
        })
            if(!rouData.ok) throw new Error("Something went wrong");
            const result: IRowDataAnimals[] = await rouData.json()
            const payload:IAnimals[] = result.map((item) => ({id: item.id, ...item.data}))
            return thunkAPI.fulfillWithValue(payload)
            
        } catch (error) {

            return thunkAPI.rejectWithValue("Something went wrong")
        }
    }
)


export const featchKategori = createAsyncThunk(
    "/kategori/GET",
    async ({resource}: IResource, thunkAPI) => {
        try {
            const rouData = await fetch(`${BASE_URL}/resource/${resource}`, {
            method: "GET",
            headers: {
                "x-bypass-token": API_KEY,
            }  
        })
            if(!rouData.ok) throw new Error("Something went wrong");
            const result: IRowDataKategory[] = await rouData.json()
            const payload:Ikategory[] = result.map((item) => ({id: item.id, ...item.data}))
            return thunkAPI.fulfillWithValue(payload)
            
        } catch (error) {

            return thunkAPI.rejectWithValue("Something went wrong")
        }  
    }
)