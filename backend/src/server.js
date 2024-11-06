const express = require("express");
const port = 3000;
const connectDb = require("./config/db-config");
const blogRoutes = require("./routes/blogRoutes");
const cors = require("cors");
const app = express();

app.use(cors());
connectDb();
app.get("/", (req, res) => {
  res.send("server in on");
});
// Set the JSON and URL-encoded payload size limit
app.use(express.json({ limit: "10mb" })); 
// app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use("/v1/api", blogRoutes);

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`server is running on port ${port}`);
});
