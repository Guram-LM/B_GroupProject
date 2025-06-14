import { createSlice } from "@reduxjs/toolkit"
import { postThunk } from "./postThunks"

const initialState = {
    loading: false,
    error: null
}

const slicePost = createSlice({
    name: "post",
    initialState,
    reducers:{},
    extraReducers: (bulider) => {
        bulider
        .addCase(postThunk.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(postThunk.fulfilled, (state) => {
            state.loading = false;
            state.error = null;
        })
        .addCase(postThunk.rejected, (state, aktion) => {
            state.loading = false;
            state.error = aktion.payload
        })

    }
})

export default slicePost.reducer