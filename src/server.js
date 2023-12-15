const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const config = require("./config");
const app = express();

// Database
const postsArr = [
  {
    id: 1,
    title: "Post 1",
    content: "Body of post 1",
    date: "2020-01-01",
  },
  {
    id: 2,
    title: "Post 2",
    content: "Body of post 2",
    date: "2020-02-02",
  },
  {
    id: 3,
    title: "Post 3",
    content: "Body of post 3",
    date: "2020-03-03",
  },
  {
    id: 4,
    title: "Post 4",
    content: "Body of post 4",
    date: "2020-04-04",
  },
];

// Middleware

app.use(morgan("common"));

// Routes

app.get("/", (req, res) => {
  res.json({ msg: "home route" });
});

// GET - /posts - grazins visus postus
app.get("/posts", (req, res) => {
  res.json(postsArr);
});
// GET - /posts/dates - grazins visus postus
app.get("/posts/dates", (req, res) => {
  const datesArr = postsArr.map((pObj) => pObj.date);
  res.json(datesArr);
});

// Get - posts/dates - grazins visas postu datas masyve

// app Listen

app.listen(config.port, () => {
  console.log(`server is running on port ${config.port}`);
});
