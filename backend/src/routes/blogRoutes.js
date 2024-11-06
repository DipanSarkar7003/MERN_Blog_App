const express = require("express");
const app = express();
const cors = require("cors");
const upload = require("../middlewares/multer.middleware");

app.use(cors()); // enable cors for all routes

const {
  getBlogs,
  createBlog,
  deleteBlog,
} = require("../controllers/blogController");

const router = express.Router();

router.route("/blogs").get(getBlogs).post(upload, createBlog); // Apply `upload` middleware to handle image upload on POST
router.route("/blogs/:id").delete(deleteBlog);

module.exports = router;
