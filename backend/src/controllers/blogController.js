const Blog = require("../models/BlogModel");
const uploadCloudinary = require("../utils/cloudinary");
const fs = require("fs");
//Function to get the blogs
const getBlogs = async (req, res) => {
  const blogs = await Blog.find();
  res.json(blogs);
};
//function to create a blog instance

const createBlog = async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const { path } = req.file;
    // Upload the image to cloudinary
    const result = await uploadCloudinary(path);
    fs.unlinkSync(path); // delete the temmporary file
    const image = result.url;
    const blog = new Blog({ title, content, author, image });
    const createdBlog = await blog.save();
    res.status(200).json(createdBlog);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};

//function to get blog by ID

const getBlogById = async function (req, res) {
  try {
    const { id } = req.params;
    const singleBlog = await Blog.findById(id);
    if (!singleBlog) res.status(404).json({ message: "Could not find blog" });

    res.status(200).json(singleBlog);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
};

//function to update the blog

function updateBlog() {}

//function to delete the blog

const deleteBlog = async function (req, res) {
  try {
    const { id } = req.params;
    const deletedBlog = await Blog.findByIdAndDelete(id);
    if (!deletedBlog) {
      return res.status(404).json({ message: " Blog not found "  });
    }
    // Return the deleted blog with a success status
    res.status(200).json(deletedBlog);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { getBlogs, createBlog, deleteBlog, getBlogById };

// In the updated code, I've added a new function called deleteBlog. This function uses the findByIdAndDelete method provided by Mongoose to delete a blog by its unique ID.
