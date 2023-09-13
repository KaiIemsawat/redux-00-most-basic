import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: "0", name: "Zukkii TheSnackKing" },
    { id: "1", name: "Titann TheBigEater" },
    { id: "3", name: "Bisciut TheGreeter" },
];

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
});
// Incase of empth {}, state = initialState: This line is a parameter default value
//  in the function signature.
// It means that if state is not provided when calling the reducer,
// it will default to the value of initialState, which is an empty object in this case.

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
