import React from 'react';

const Sidebar = () => {
  // Example categories and recent posts data
  const categories = ['Technology', 'Health', 'Lifestyle', 'Education'];
  const recentPosts = [
    'How to Learn React',
    'Benefits of Yoga',
    'Top 10 Travel Destinations',
    'The Future of AI',
  ];

  return (
    <aside>
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">Categories</h3>
        <ul>
          {categories.map((category, index) => (
            <li key={index} className="mb-2">
              <a href="#" className="text-blue-500 hover:underline">{category}</a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
        <ul>
          {recentPosts.map((post, index) => (
            <li key={index} className="mb-2">
              <a href="#" className="text-blue-500 hover:underline">{post}</a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
