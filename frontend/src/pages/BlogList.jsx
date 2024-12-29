import { useContext, useEffect } from "react";
import BlogItem from "../components/blogItem/BlogItem";
import Sidebar from "../components/sidebar/Sidebar";
import Slider from "../components/Slider/Slider";
import { BlogContext } from "../context/BlogContext";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router";
function BlogList() {
  const navigate = useNavigate();
  const { topics, blogs } = useContext(BlogContext);
  const { loggedInUser, token } = useContext(UserContext);
  console.log("user", loggedInUser);

  console.log(blogs);
  console.log(Array.isArray(blogs));

  useEffect(() => {
    if (!token || !loggedInUser) {
      // Redirect to login page
      // window.location.href = "/login";
      navigate("/login");
    }
  }, [token, loggedInUser]);

  if (!blogs || blogs.length == 0 || blogs == null)
    return (
      <div className="flex items-center justify-center h-screen bg-green-100">
        <h1 className="text-3xl">Ahh ! No blogs found 😣 </h1>
      </div>
    );

  const fontBlog = blogs?.slice(0, 5);
  const sideBlog = blogs?.slice(5, 10);
  const sliderBlog = blogs?.slice(11, 15);
  console.log(sideBlog);

  return (
    <div>
      <div className=" mt-6 blog-list  px-[5rem]">
        <BlogItem blogs={fontBlog} />
        <Sidebar topics={topics} sideBlog={sideBlog} />
      </div>
      <Slider blogs={sliderBlog} />
    </div>
  );
}

export default BlogList;
