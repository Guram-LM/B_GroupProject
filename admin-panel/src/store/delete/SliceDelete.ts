import { createSlice } from "@reduxjs/toolkit"
import { deleteThunk } from "./DeleteThunks"

interface DeleteState{
    loading: boolean,
    error: string | null,
}
const initialState:DeleteState = {
  loading: false,
  error: null,
}

const sliceDelete = createSlice({
    name: "delete",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(deleteThunk.pending, (state) => {
            state.loading = true
            state.error = null
        })
        .addCase(deleteThunk.fulfilled, (state) => {
            state.loading = false
            state.error = null
        })
        .addCase(deleteThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload as string
        })
    }
})

export default sliceDelete.reducer