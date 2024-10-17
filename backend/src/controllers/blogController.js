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

function deleteBlog() {}

module.exports = { getBlogs, createBlog };
