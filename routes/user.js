const router = require("express").Router();

router.get("/usertest", (req, res) => {
  res.send("User Succesfull!");
});

router.post("/userposttest", (req, res) => {
  const username = req.body.username;
  console.log(username);
  res.send("Username anda adalah " + username);
});

module.exports = router;
