import { combineReducers, configureStore } from "@reduxjs/toolkit";
import slicePost from "./post/slicePost"
import sliceGet from "./get/sliceGet"
import sliceUpdate from "./update/SliceUpdate"
import sliceDelete from "./delete/SliceDelete"

const rootReduser = combineReducers({
    post: slicePost,
    get: sliceGet,
    update: sliceUpdate,
    delete: sliceDelete

})

export const store = configureStore({
    reducer: rootReduser
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


