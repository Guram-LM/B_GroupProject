import { createSlice } from "@reduxjs/toolkit"
import { featchAnimals, featchKategori } from "./getThunks"


const initialState = {
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
            state.error = action.payload
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
            state.error = action.payload
        })
    }
    
})

export default sliceGet.reducer
