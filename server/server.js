const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routesUrls = require("./routes/routes");
const cors = require("cors");

dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS, function () {
  console.log("Database connected successfully!");
});

app.use(express.json());
app.use(cors());
app.use("/app", routesUrls); // (base path, )

app.listen(4000, function () {
  console.log("Server is running on port 4000");
});
