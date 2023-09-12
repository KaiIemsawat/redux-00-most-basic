import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = "";

// export themeSlice
export const bgThemeSlice = createSlice({
    name: "bgTheme",
    initialState: { value: initialStateValue },
    reducers: {
        changeBgColor: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { changeBgColor } = bgThemeSlice.actions;

// export reduser which is in themeSlice
export default bgThemeSlice.reducer;
