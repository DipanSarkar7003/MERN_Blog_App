const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors()); // enable cors for all routes

const {
  getBlogs,
  createBlog,
  deleteBlog,
} = require("../controllers/blogController");

const router = express.Router();

router.route("/blogs").get(getBlogs).post(createBlog);
router.route("/blogs/:id").delete(deleteBlog);

module.exports = router;








