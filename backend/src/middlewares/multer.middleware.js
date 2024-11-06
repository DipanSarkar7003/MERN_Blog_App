const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "src/public");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer(
  { storage },
  {
    limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB limit, adjust as needed
  }
);

// This middleware will be used to handle file uploads in the create blog route
module.exports = upload.single("image");

// In the solution, we have imported the multer module and configured it to use the diskStorage function to store uploaded images in a public directory. The filename is generated using a unique suffix to avoid overwriting existing files. The upload middleware is then exported for use in the create blog route.
