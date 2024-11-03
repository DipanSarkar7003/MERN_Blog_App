import { useEffect, useState } from "react";

function BlogList() {
  const [blogs, setBlogs] = useState([]);

  async function handleDelete(id) {
    console.log("delete clicked");
    // implement delete logic here
    // fetch delete request to the backend server
    try {
      const res = await fetch(`http://localhost:3000/v1/api/blogs/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        console.log(res);
        setBlogs((prevBlogs) =>
          prevBlogs.filter((blog) => blog._id !== id)
        );
      }
      else{
        console.log("Failed to delete blog");
     
      }
    } catch (error) {
      console.log(error);
    }
    // handle the response and update the blog list accordingly
  }

  useEffect(() => {
    async function getBlogs() {
      try {
        const res = await fetch("http://localhost:3000/v1/api/blogs");
        const data = await res.json();
        console.table(data);
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
}

export default BlogList;
