import { MessageCircle, ThumbsUp } from "lucide-react";

const PopularBlogs = () => {
  const blogs = [
    {
      title: "BLog 1",
      author: "Harris",
      likes: 123,
      comments: 44,
    },
    {
      title: "BLog 2",
      author: "Dunk",
      likes: 52,
      comments: 121,
    },

    {
      title: "BLog 3",
      author: "Corn",
      likes: 321,
      comments: 51,
    },

    {
      title: "BLog 4",
      author: "John",
      likes: 154,
      comments: 7,
    },

    {
      title: "BLog 5",
      author: "Jordan",
      likes: 19,
      comments: 817,
    },

    {
      title: "BLog 6",
      author: "Alex",
      likes: 912831,
      comments: 781,
    },

    {
      title: "BLog 7",
      author: "Apa",
      likes: 12423,
      comments: 7,
    },

    {
      title: "BLog 8",
      author: "Harold",
      likes: 1213,
      comments: 8,
    },
  ];

  return (
    <div className="bg-white p-5 w-[23rem] mt-4 border ml-5 rounded">
      <h1 className="mb-5 text-xl font-bold">Popular Blogs</h1>
      <ul>
        {blogs.map((blog, index) => (
          <li key={index} className="mb-4">
            <div className="flex items-center justify-between">
              <span className="mb-2 font-bold">{blog.title}</span>
            </div>

            <span className="text-gray-600">By {blog.author} </span>

            <div className="flex items-center mt-2">
              <MessageCircle size={16} />
              <span className="ml-1 mr-5 text-gray-500">{blog.likes}</span>

              <ThumbsUp size={16} />
              <span className="ml-2 mr-2 text-gray-500">{blog.comments}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularBlogs;
