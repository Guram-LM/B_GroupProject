import { combineReducers, configureStore } from "@reduxjs/toolkit";
import slicePost from "./post/slicePost"
import sliceGet from "./get/sliceGet"

const rootReduser = combineReducers({
    post: slicePost,
    get: sliceGet

})

export const store = configureStore({
    reducer: rootReduser
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;