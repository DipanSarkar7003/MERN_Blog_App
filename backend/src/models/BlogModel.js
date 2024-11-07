const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    
    // required: true,
  },
  content: {
    type: String,
    // required: true,
  },
  author: {
    type: String,
  },
  image: {
    type: String,
    // required: true,
    default: 'default-image.jpg', // Placeholder image if no image is provided. Replace with your actual image storage path.
  }

});


// Cretaing the Blog Model out of blogSchema 

const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog ;