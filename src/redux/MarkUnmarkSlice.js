import { createSlice } from "@reduxjs/toolkit";
import data from "/data.json";

export const markUnmarkSlice = createSlice({
    name: "markunmark",
    initialState: data,
    reducers: {
        markVisited: (state, action) => {
            const matchplace = state.find(item => item.id === action.payload);
            if (matchplace.visited === true) {
                matchplace.visited = false;
            } else {
                matchplace.visited = true;
            }
            return state;
        }
    }
})

export default markUnmarkSlice.reducer;
export const {markVisited} = markUnmarkSlice.actions;