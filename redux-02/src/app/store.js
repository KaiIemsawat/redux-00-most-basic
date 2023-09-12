import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
    // Then, this 'store' will be used inside <Provider> in index.js
    reducer: { counter: counterReducer },
});
