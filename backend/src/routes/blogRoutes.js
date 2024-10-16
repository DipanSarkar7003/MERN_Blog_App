const express = require('express')

const {getBlogs} = require('../controllers/blogController')

const router = express.Router()

router.route ('v1/api/blogs').get(getBlogs).post()