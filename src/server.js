const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const config = require("./config");
const app = express();

// Middleware

app.use(morgan("common"));

// Routes

app.get("/", (req, res) => {
  res.json({ msg: "home route" });
});

// app Listen

app.listen(config.port, () => {
  console.log(`server is running on port ${config.port}`);
});
