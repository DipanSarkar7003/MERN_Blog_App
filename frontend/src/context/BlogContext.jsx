import { createContext, useState, useEffect } from "react";
export const BlogContext = createContext(null);

function BlogContextProider({ children }) {
  const [blogs, setBlogs] = useState([]);

  //Calling blog URL
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
    <BlogContext.Provider value={{ topics, blogs }}>
      {children}
    </BlogContext.Provider>
  );
}

export default BlogContextProider;
