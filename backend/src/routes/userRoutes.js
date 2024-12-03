const express = require("express");
const cors = require("cors");
const { register } = require("../controllers/authController");

const app = express();
app.use(cors());
const router = express.Router();
router.post("/user/register" , register);


module.exports = router ;