import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IReduxKorb } from "../../interface/Interface";

interface Istate {
  items: IReduxKorb[];
}

const initialState: Istate = {
  items: JSON.parse(localStorage.getItem("corb") || "[]"),
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addBasket(state, action: PayloadAction<IReduxKorb>) {
      state.items.push(action.payload);
      localStorage.setItem("corb", JSON.stringify(state.items));
    },
    removeBasket(state, action: PayloadAction<string>) {
      state.items = state.items.filter(item => item.id !== action.payload);
      localStorage.setItem("corb", JSON.stringify(state.items));
    },
    clearBaskit(state) {
      state.items = [];
      localStorage.removeItem("corb");
    },
  },
});

export const { addBasket, removeBasket, clearBaskit } = basketSlice.actions;
export default basketSlice.reducer;
