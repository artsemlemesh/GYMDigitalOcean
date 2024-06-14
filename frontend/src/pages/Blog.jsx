import { AddPostForm } from "../features/posts/AddPostForm";
import PostsList from "../features/posts/PostList";
import Sidebar from "../features/posts/Sidebar";

const Blog = () => {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3 md:pr-8">
          {/* <AddPostForm/> */}
          <PostsList/>

          </div>
          <div className="md:w-1/3">
        <Sidebar/>
          </div>
        </div>
        
      
  
      </div>
  )
  };
  
  export default Blog;