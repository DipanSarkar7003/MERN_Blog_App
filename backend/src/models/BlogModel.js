const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },

});


// Cretaing the Blog Model out of blogSchema 

const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog ;