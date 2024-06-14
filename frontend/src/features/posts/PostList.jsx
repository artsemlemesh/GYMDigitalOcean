import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "../../components/Spinner";
import { fetchPosts } from "./postsSlice";

const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const postStatus = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  let content;

  if (postStatus === "loading") {
    content = <Spinner text="Loading..." />;
  } else if (postStatus === "succeeded") {
    content = posts.map((post, index) => (
      <div key={index} className="col-span-1 lg:col-span-2 max-w-full rounded overflow-hidden shadow-lg mb-8 flex flex-col">
        {post.image && (
          <img className="w-full h-96 object-cover" src={post.image} alt={post.title} />
        )}
        <div className="px-6 py-4 flex-grow">
          <div className="font-bold text-2xl mb-2">{post.title}</div>
          <p className="text-gray-700 text-base mb-4">{post.content}</p>
        </div>
        <div className="px-6 py-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
            Purchase It
          </button>
        </div>
      </div>
    ));
  } else if (postStatus === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <section>
      <h2 className="text-3xl font-bold mb-8">Posts</h2>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {content}
      </div>
    </section>
  );
};

export default PostsList;
