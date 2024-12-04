const express = require("express");
const cors = require("cors");
const { register , login } = require("../controllers/authController");

const app = express();
app.use(cors());
const router = express.Router();


//Route to register the user 

router.post("/user/register" , register);

//Route to login the user 

router.post("/user/login" , login)

module.exports = router ;