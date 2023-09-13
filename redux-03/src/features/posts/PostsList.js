import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";

const PostsList = () => {
    const posts = useSelector(selectAllPosts); // <-- check here is different from the previous practice
    // The previous practice -> const count = useSelector((state) => state.someValue);

    const renderedPosts = posts.map((eachPost) => (
        <article key={eachPost.id}>
            <h3>{eachPost.title}</h3>
            <p>{eachPost.content.substring(0, 100)}</p>
            {/* Use substring so that will show only first 100 charactersif the content is too long */}
            <p className="postCredit">
                <PostAuthor userId={eachPost.userId} />
            </p>
        </article>
    ));

    return (
        <section>
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    );
};

export default PostsList;
