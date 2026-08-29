import { configureStore } from "@reduxjs/toolkit";
import hideShowReducer from "./hideShowSlide.js";
import markUnmarkReducer from "./MarkUnmarkSlice.js";

export const store = configureStore({
    reducer: {
        hide: hideShowReducer,
        markunmark: markUnmarkReducer,
    }
})