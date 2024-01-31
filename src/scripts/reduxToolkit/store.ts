import { configureStore } from "@reduxjs/toolkit";
import sliceUserReducer from './slice'

export const store = configureStore({
    reducer: {
        user: sliceUserReducer
    }
})