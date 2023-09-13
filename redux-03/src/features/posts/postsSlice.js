import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
        id: "1",
        title: "random hard code title 1",
        content: "random hard code content 1",
    },
    {
        id: "2",
        title: "bla blabla bla bla blahhhhh",
        content: "bla blah bla blah blaaaa blaaaaaaahaaaa",
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
