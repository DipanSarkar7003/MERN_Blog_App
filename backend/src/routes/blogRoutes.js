const express = require("express");

const { getBlogs, createBlog } = require("../controllers/blogController");

const router = express.Router();

router.route("/blogs").get(getBlogs).post(createBlog);

module.exports = router;
