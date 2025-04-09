const express = require("express");
const router = express.Router();

/* router.get("/UserName", (req, res) => {
  res.send("UserName route");
}); */

router.get("/users", (req, res) => {
  res.render('users');
});

module.exports = router;
