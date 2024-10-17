const express = require("express");
const app = express();
const port = 3000;
const connectDb = require("./config/db-config");
const blogRoutes = require("./routes/blogRoutes");
const cors = require("cors");

app.use(cors()); // enable cors for all routes

connectDb();
app.get("/", (req, res) => {
  res.send("server in on");
});
app.use(express.json());
app.use("/v1/api", blogRoutes);

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`server is running on port ${port}`);
});
