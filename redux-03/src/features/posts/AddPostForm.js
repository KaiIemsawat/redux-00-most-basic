import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit"; // used for generate id

import { postAdded } from "./postsSlice";

const AddPostForm = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const dispatch = useDispatch();

    const onTitleChanged = (e) => setTitle(e.target.value);
    const onContentChange = (e) => setContent(e.target.value);

    const onSavePostClick = () => {
        if (title && content) {
            // if conditions met, then, dispatch what created as 'slice'
            // In this case -> postAdded() that will have these fields (keys)
            // title, content. Then, assign the value. id will be created with nanoid
            dispatch(postAdded(title, content));
            // then asign empty value to the fields
            setTitle("");
            setContent("");
        }
    };

    return (
        <section>
            <h2>Add New Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="postContent">Content:</label>
                <textarea
                    name="postContent"
                    id="postContent"
                    value={content}
                    onChange={onContentChange}
                    cols="30"
                    rows="10"
                />
                <button type="button" onClick={onSavePostClick}>
                    Save Post
                </button>
            </form>
        </section>
    );
};

export default AddPostForm;
