import { useParams } from "react-router";
import { useState, useEffect, useContext } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import { BlogContext } from "../context/BlogContext";

function SingleBlog() {
  const [blog, setBlog] = useState([]);
  const { id } = useParams();
  const URL = `http://localhost:3000/v1/api/blogs/${id}`;

  const { topics, blogs } = useContext(BlogContext);
  const sideBlog = blogs.slice(5, 10);

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
      <div className="singleItemWrapper grid ">
        <div className="px-[4rem] mt-4 border-r-2">
          <img className="w-[]" src={blog.image} alt="" />
          <div className="py-4">
            <h1 className="font-bold text-3xl ">{blog.title}</h1>
            <h3 className="pb-3 text-slate-500 font-medium pt-2">
              Author: {blog.author}
            </h3>
            <p className="mb-4">{blog.content}</p>

            <button className="bg-green-200 p-2 rounded-xl">
              Edit this blog{" "}
            </button>
          </div>
        </div>
        <Sidebar topics={topics} sideBlog={sideBlog} />
      </div>
    </div>
  );
}

export default SingleBlog;
