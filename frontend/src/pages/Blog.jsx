import { useEffect, useState } from "react";
import { AddPostForm } from "../features/posts/AddPostForm";
import PostsList from "../features/posts/PostList";
import Sidebar from "../features/posts/Sidebar";
import { fetchPosts } from "../features/posts/postsSlice";
import { useDispatch, useSelector } from "react-redux";
const Blog = () => {

  const posts = useSelector((state) => state.posts.posts);
  const [activePost, setActivePost] = useState(null);





  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/3 md:pr-8">
          <PostsList posts={posts} activePost={activePost} setActivePost={setActivePost}/>
        </div>
        <div className="md:w-1/3">
          <Sidebar activePost={activePost} posts={posts}/>
        </div>
      </div>
    </div>
  );
};
  
  export default Blog;