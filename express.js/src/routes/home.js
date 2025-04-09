const express = require("express");
const router = express.Router();
const axios = require('axios')

router.get("/", (req, res) => {
  let isActive = true;
  const users = [
    {
      id: 1,
      name: "Luis",
      alias: "LUMA",
    },
    {
      id: 2,
      name: "Manuel",
      alias: "025",
    },
  ];

  res.render("index", {
    title: "index page",
    isActive,
    users,
  });
});

router.all("/about", (req, res) => {
  const title = "mi pagina creada desde express";
  res.render("about", {
    title: "indexpage",
  });
});

router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

router.get("/posts", async (req, res) => {

  const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
  console.log(response.data)

  res.render('posts', {
    posts: response.data
  })
})

module.exports = router;
