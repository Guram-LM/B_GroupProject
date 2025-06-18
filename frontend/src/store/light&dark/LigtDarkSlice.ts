import { createSlice } from "@reduxjs/toolkit";

interface TState {
  them: "light" | "dark";
};

const localTheme = localStorage.getItem("theme") as "light" | "dark" | null;

const initialState: TState = {
  them: localTheme ?? "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    appTheme(state) {
      state.them = state.them === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.them);
    },
    setTheme(state, action) {
      state.them = action.payload;
      localStorage.setItem("theme", state.them);
    }
  },
});

export const { appTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;