import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sliceGet from "./get/sliceGet"
import basketSlice from "./reduxBasket/ReduxBasket"
import wishlistSlice from "./redaxwishlist/redaxwishlist"

const rootReduser = combineReducers({
    
    get: sliceGet,
    basket: basketSlice,
    wishlist: wishlistSlice,
    

})

export const store = configureStore({
    reducer: rootReduser
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


