import { useEffect, useState } from "react";

function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function getBlogs() {
      try {
        const res = await fetch(
          "https://mern-blog-app-r8bo.onrender.com/v1/api/blogs"
        );
        const data = await res.json();
        console.log(data);
        setBlogs(data);
      } catch (err) {
        console.log(err);
      }
    }
    getBlogs();
  }, []);
  if (!blogs) return <div>No Blogs found</div>;

  return (
    <div className="flex">
      {blogs.map((blog) => {
        return (
          <div key={blog._id} className="border bg-blue-200 p-2 ">
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            <p>Posted by: {blog.author}</p>
            <button className="px-4 py-2 bg-green-400 rounded mr-2">
              edit
            </button>
            <button className="px-4 py-2 bg-red-400 rounded">delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default BlogList;
