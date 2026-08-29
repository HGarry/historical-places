import { createSlice } from "@reduxjs/toolkit";

export const hideShowSlide = createSlice({
    name: "hide",
    initialState: true,
    reducers: {
        hideShow: (state) => (
            !state
        )
    }
})

export default hideShowSlide.reducer;
export const {hideShow} = hideShowSlide.actions;
