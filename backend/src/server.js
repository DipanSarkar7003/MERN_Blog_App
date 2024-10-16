const express = require("express");
const app = express();
const port = 3000;
const connectDb = require("./config/db-config");
const Blog = require("./models/BlogModel")
connectDb ();
app.get("/", (req, res) => {
    res.send("server in on");
});

app.listen(port, (err) => {
    if (err) throw err;
    console.log(`server is running on port ${port}`);
});


console.log(Blog)