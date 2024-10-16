
const Blog = require('../models/BlogModel')

//Function to get the blogs
const getBlogs = async(req , res)=>{
const blogs = await Blog.find();
res.json(blogs)
}
//function to create a blog instance
function createBlogs (){
const createBlog = async (req , res)=>{
    const {title , content , autor} = req.body;
    const blog = new Blog
}
}

//function to get blog by ID

function getBlogById (){

}

//function to update the blog 

function updateBlog (){

}

//function to delete the blog

function deleteBlog(){

}


mofule.exports = {getBlogs}