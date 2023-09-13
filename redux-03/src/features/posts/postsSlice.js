import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
    {
        id: "1",
        title: "random hard code title 1",
        content: "random hard code content 1",
        date: sub(new Date(), { minutes: 10 }).toISOString(),
    },
    {
        id: "2",
        title: "bla blabla bla bla blahhhhh",
        content: "bla blah bla blah blaaaa blaaaaaaahaaaa",
        date: sub(new Date(), { minutes: 5 }).toISOString(),
    },
];

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload);
            },
            // reducer: (state, action) => {
            //     state.push(action.payload);
            // },
            // The `prepare` function defines how the action payload should be prepared.
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        date: new Date().toISOString(),
                        userId,
                    },
                };
            },
        },
    },
});

// In case if there is no specific value in 'reducer:{}', we may export as below
export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
