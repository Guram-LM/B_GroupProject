import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sliceGet from "./get/sliceGet"
import basketSlice from "./reduxBasket/ReduxBasket"

const rootReduser = combineReducers({
    
    get: sliceGet,
    basket: basketSlice,
    

})

export const store = configureStore({
    reducer: rootReduser
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


