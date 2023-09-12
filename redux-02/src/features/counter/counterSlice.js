import { createSlice } from "@reduxjs/toolkit";

// initialState <-- initial value. Coule be anything, String, number, object, etc
const initialState = {
    count: 0,
};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        reset: (state) => {
            state.count = 0;
        },
        // 'state' hold information about current and previous value
        // action contain payload and type
        incrementByAmount: (state, action) => {
            state.count += action.payload;
        },
    },
});

// Export what inside the 'const variableSlice = createSlice()'
export const { increment, decrement, reset, incrementByAmount } =
    counterSlice.actions;

// then export default the same variable with .reducer -> 'variableSlice.reducer';
// Convention name when import -> variableReducer
export default counterSlice.reducer;
