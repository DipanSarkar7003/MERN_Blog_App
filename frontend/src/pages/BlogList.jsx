import { useContext, useEffect, useState } from "react";
import BlogItem from "../components/blogItem/BlogItem";

import Sidebar from "../components/sidebar/Sidebar";
import Slider from "../components/Slider/Slider";
import { BlogContext } from "../context/BlogContext";
function BlogList() {
  const { topics, blogs } = useContext(BlogContext);

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

  async function handleSeeMore(id) {
    console.log(id);
  }

  const fontBlog = blogs.slice(0, 5);
  const sideBlog = blogs.slice(5, 10);
  const sliderBlog = blogs.slice(11, 15);

  console.log(sideBlog);

  if (!blogs) return <div>No Blogs found</div>;

  return (
    <div>
      <div className=" mt-6 blog-list  px-[5rem]">
        <BlogItem
          blogs={fontBlog}
          handleDelete={handleDelete}
          handleSeeMore={handleSeeMore}
        />
        <Sidebar topics={topics} sideBlog={sideBlog} />
      </div>
      <Slider blogs={sliderBlog} />
    </div>
  );
}

export default BlogList;
