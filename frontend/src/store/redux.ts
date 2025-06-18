import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sliceGet from "./get/sliceGet";
import basketSlice from "./reduxBasket/ReduxBasket";
import wishlistSlice from "./redaxwishlist/redaxwishlist";
import sliceUpdate from "./update/SliceUpdate";
import themeSlice from "./light&dark/LigtDarkSlice"

const rootReduser = combineReducers({
    
    get: sliceGet,
    update: sliceUpdate,
    basket: basketSlice,
    wishlist: wishlistSlice,
    dark_light: themeSlice
    

})

export const store = configureStore({
    reducer: rootReduser
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


