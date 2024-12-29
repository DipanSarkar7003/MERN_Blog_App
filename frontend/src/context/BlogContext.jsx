import { createContext, useState, useEffect } from "react";
export const BlogContext = createContext(null);

function BlogContextProider({ children }) {
  const [blogs, setBlogs] = useState([]);
  const token = localStorage.getItem("token");

  //Calling blog URL
  useEffect(() => {
    async function getBlogs() {
      try {
        const res = await fetch("http://localhost:3000/v1/api/blogs", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        console.log(data)
        setBlogs(data.data);
        console.log(data.message);
      } catch (err) {
        console.log(err);
      }
    }
    getBlogs();
  }, []);

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

  return (
    <BlogContext.Provider value={{ topics, blogs, token }}>
      {children}
    </BlogContext.Provider>
  );
}

export default BlogContextProider;
