import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = "";

// export themeSlice
export const themeSlice = createSlice({
    name: "theme",
    initialState: { value: initialStateValue },
    reducers: {
        changeColor: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { changeColor } = themeSlice.actions;

// export reduser which is in themeSlice
export default themeSlice.reducer;
