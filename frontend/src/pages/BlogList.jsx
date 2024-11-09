import { useEffect, useState } from "react";
import BlogItem from "../components/blogItem/BlogItem";
import SideBlogItem from "../components/SideBlogItem/SideBlogItem";

function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const topics = [
    "Science",
    "Computer",
    "Data Science ",
    "History",
    "Self Improvement",
    "Development",
    "Desipline",
    "Machine Learing",
  ];

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

  useEffect(() => {
    async function getBlogs() {
      try {
        const res = await fetch("http://localhost:3000/v1/api/blogs");
        const data = await res.json();
        // console.table(data);
        setBlogs(data);
      } catch (err) {
        console.log(err);
      }
    }
    getBlogs();
  }, []);

  const fontBlog = blogs.slice(0, 5);
  const sideBlog = blogs.slice(5, 8);

  console.log(sideBlog);

  if (!blogs) return <div>No Blogs found</div>;

  return (
    <div className=" mt-6 blog-list  px-[5rem]">
      <BlogItem
        blogs={fontBlog}
        handleDelete={handleDelete}
        handleSeeMore={handleSeeMore}
      />
      <div className="p-4">
        <div>
          <p className="mb-5 font-semibold text-[18px]">Recommended topics</p>

          <div className="topic-list flex flex-wrap gap-4">
            {topics.map((topic, index) => {
              return (
                <p
                  key={index}
                  className="pill bg-[#F2F2F2] rounded-3xl px-4 py-2 text-slate-800 capitalize"
                >
                  {topic}{" "}
                </p>
              );
            })}
          </div>
        </div>
        <div className="px-4">
          <p className="mb-5 font-semibold text-[18px] mt-7">Popular blogs</p>

          <div className="popularBlogs pr-4">
            {sideBlog.map((blog, index) => {
              // console.log(blog);
              return <SideBlogItem key={index} blog={blog} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogList;
