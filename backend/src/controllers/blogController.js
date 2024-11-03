const Blog = require("../models/BlogModel");

//Function to get the blogs
const getBlogs = async (req, res) => {
  const blogs = await Blog.find();
  res.json(blogs);
};
//function to create a blog instance

const createBlog = async (req, res) => {
  const { title, content, author } = req.body;
  const blog = new Blog({ title, content, author });

  const createdBlog = await blog.save();
  res.status(201).json(createdBlog);
  console.log(req.body);
};

//function to get blog by ID

function getBlogById() {}

//function to update the blog

function updateBlog() {}

//function to delete the blog

const deleteBlog = async function (req, res) {
  try {
    const { id } = req.params;
    const deletedBlog = await Blog.findByIdAndDelete(id);
    if (!deletedBlog) {
      return res.status(404).json({ message: " Blog not found " });
    }
    console.log(req.params);
    // Return the deleted blog with a success status
    res.status(200).json(deletedBlog);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { getBlogs, createBlog, deleteBlog };

// In the updated code, I've added a new function called deleteBlog. This function uses the findByIdAndDelete method provided by Mongoose to delete a blog by its unique ID.
