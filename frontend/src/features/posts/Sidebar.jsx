import React from 'react';

const Sidebar = ({ posts, activePost }) => {
  return (
    <aside className="sticky top-0 h-screen overflow-y-auto bg-white p-4">
      {posts.map((post, index) => (
        <div
          key={index}
          className={`p-4 rounded-lg cursor-pointer hover:bg-gray-100 ${
            post.id === activePost ? 'bg-blue-100 border-l-4 border-blue-500 shadow' : 'border-l-4 border-transparent'
          } transition-all duration-300 ease-in-out`}
        >
          <h4 className="text-gray-800 font-semibold">{post.title}</h4>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;