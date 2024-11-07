import { useEffect, useState } from "react";
import BlogItem from "../components/blogItem/BlogItem";

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
        setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id));
      } else {
        console.log("Failed to delete blog");
      }
    } catch (error) {
      console.log(error);
    }
    // handle the response and update the blog list accordingly
  }

  async function handleSeeMore (id){
console.log(id)
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
    <div className=" grid grid-cols-2">
      <BlogItem blogs={blogs} handleDelete={handleDelete} handleSeeMore={handleSeeMore} />
    </div>
  );
}

export default BlogList;
