import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [userId, setuserId] = useState("");

    const dispatch = useDispatch();

    const users = useSelector(selectAllUsers);
    // selectAllUsers === (state) => state.users; in usersSlice file

    const onTitleChanged = (e) => setTitle(e.target.value);
    const onContentChange = (e) => setContent(e.target.value);
    const onAuthorChange = (e) => setuserId(e.target.value);

    const onSavePostClick = () => {
        if (title && content) {
            // if conditions met, then, dispatch what created as 'slice'
            // In this case -> postAdded() that will have these fields (keys)
            // title, content, userId. Then, assign the value. id will be created with nanoid
            dispatch(postAdded(title, content, userId));
            // then asign empty value to the fields
            setTitle("");
            setContent("");
        }
    };

    const canSave = !!title && !!content && !!userId;

    const usersOptions = users.map((eachUser) => (
        <option key={eachUser.id} value={eachUser.id}>
            {eachUser.name}
        </option>
    ));

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

                <label htmlFor="postAuthor">Author:</label>
                <select
                    value={userId}
                    id="postAuthor"
                    onChange={onAuthorChange}
                >
                    <option value=""></option>
                    {usersOptions}
                </select>

                <label htmlFor="postContent">Content:</label>
                <textarea
                    name="postContent"
                    id="postContent"
                    value={content}
                    onChange={onContentChange}
                    cols="30"
                    rows="10"
                />
                <button
                    type="button"
                    onClick={onSavePostClick}
                    disabled={!canSave}
                >
                    Save Post
                </button>
            </form>
        </section>
    );
};

export default AddPostForm;
