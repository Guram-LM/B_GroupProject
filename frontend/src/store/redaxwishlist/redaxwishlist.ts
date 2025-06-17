import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IReduxKorb } from "../../interface/Interface";

interface Istate {
  items: IReduxKorb[];
}

const initialState:Istate = {
items:JSON.parse(localStorage.getItem("wishlist") || "[]")

}

const  wishlistSlice = createSlice({
  name:"wishlist",
  initialState,
  reducers:{
    addWishlist(state, action: PayloadAction<IReduxKorb>) {

      state.items.push(action.payload)
      localStorage.setItem("wishlist",JSON.stringify(state.items))
    },

    removeWishlist(state, action: PayloadAction<string>){
      state.items = state.items.filter(item => item.id !== action.payload)
      localStorage.setItem("wishlist",JSON.stringify(state.items))
      
    } ,

    clearWishlist(state) {
      state.items =[]
      localStorage.removeItem("wishlist")
    }
  }

})

export const {addWishlist,removeWishlist,clearWishlist} = wishlistSlice.actions
export default wishlistSlice.reducer