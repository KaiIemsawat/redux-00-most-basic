import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { name: "", age: 0, email: "" };

// export userSlice
export const userSlice = createSlice({
    name: "user",
    initialState: { value: initialStateValue },
    reducers: {
        // 'state' hold information about current and previous value
        // action contain payload and type
        login: (state, action) => {
            state.value = action.payload;
        },

        logout: (state) => {
            state.value = initialStateValue;
        },
    },
});

export const { login, logout } = userSlice.actions;

// export reduser which is in userSlice
export default userSlice.reducer;
