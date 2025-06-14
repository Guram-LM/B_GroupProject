import { createSlice } from "@reduxjs/toolkit"
import { featchAnimals, featchKategori } from "./getThunks"
import type { IAnimals, Ikategory,} from "../../interface/Interface";

interface GetState {
  animals: IAnimals[];
  kategori: Ikategory[]; 
  loading: boolean;
  error: string | null;
}
const initialState:GetState = {
    animals: [],
    kategori: [],
    loading: false,
    error: null
}



const sliceGet = createSlice({
    name: "get",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(featchAnimals.pending, (state) => {
            state.loading = true
        })
        .addCase(featchAnimals.fulfilled, (state, action) => {
            state.loading = false,
            state.error = null,
            state.animals = action.payload
        })
        .addCase(featchAnimals.rejected, (state, action) => {
            state.loading = false,
            state.error = action.payload as string
        })


         .addCase(featchKategori.pending, (state) => {
            state.loading = true
        })
        .addCase(featchKategori.fulfilled, (state, action) => {
            state.loading = false,
            state.error = null,
            state.kategori = action.payload
        })
        .addCase(featchKategori.rejected, (state, action) => {
            state.loading = false,
            state.error = action.payload as string
        })
    }
    
})

export default sliceGet.reducer
