import { useParams } from "react-router";
import { useState, useEffect } from "react";

function SingleBlog() {
  const [blog, setBlog] = useState([]);
  const { id } = useParams();
  const URL = `http://localhost:3000/v1/api/blogs/${id}`;

  useEffect(() => {
    try {
      async function getBlog() {
        const response = await fetch(URL);
        const data = await response.json();
        setBlog(data);
        console.table(data);
      }

      getBlog();
    } catch (err) {
      console.log(err);
    }
  }, []);

  if (!blog) return <h1>There is no such blog .. !</h1>;

  return (
    <div>
      <img src={blog.image} alt="" />
      <h1>{blog.title}</h1>
      <h3>Author: {blog.author}</h3>
      <p>{blog.content}</p>

      <button className="bg-green-200 p-2 rounded-xl">Edit this blog </button>
    </div>
  );
}

export default SingleBlog;
