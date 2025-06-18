import { createSlice } from "@reduxjs/toolkit";
import { updateThunk } from "./UpdateThanks";


interface UpdateState {
    loading: boolean,
    error: string | null,
    updatedItem: string | null,
}



const initialState:UpdateState = {
  loading: false,
  error: null,
  updatedItem: null,
};

const sliceUpdate = createSlice({
  name: "update",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.updatedItem = null;
      })
      .addCase(updateThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.updatedItem = action.payload.id 
      })
      .addCase(updateThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string
      });
  },
});


export default sliceUpdate.reducer;
