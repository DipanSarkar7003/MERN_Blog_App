import React from "react";

const BlogItem = ({ blogs, handleDelete }) => {
  return (
    <div>
      {blogs.map((blog) => {
        return (
          <div key={blog._id} className="border bg-blue-100 p-2 ">
            <img src={blog.image} alt="" />
            <h1 className="text-3xl capitalize">{blog.title}</h1>
            <p>{blog.content}</p>
            <p className="text-slate-700">Posted by: {blog.author}</p>
            <button className="px-4 py-2 bg-green-400 rounded mr-2">
              edit
            </button>
            <button
              onClick={() => handleDelete(blog._id)}
              className="px-4 py-2 bg-red-400 rounded"
            >
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default BlogItem;
