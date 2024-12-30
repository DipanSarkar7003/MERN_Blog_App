const express = require("express");
const app = express();
const cors = require("cors");
const upload = require("../middlewares/multer.middleware");
const { protect } = require("../controllers/authController");

app.use(cors()); // enable cors for all routes

const {
  getBlogs,
  createBlog,
  deleteBlog,
  getBlogById,
} = require("../controllers/blogController");

const router = express.Router();

router.route("/blogs").get( getBlogs).post(upload, createBlog); // Apply `upload` middleware to handle image upload on POST
router.route("/blogs/:id").delete(deleteBlog).get(getBlogById);

module.exports = router;
