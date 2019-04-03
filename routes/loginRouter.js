const express = require("express");
const loginAccess = require("../data/restricted/access.js").loginAccess;

const router = express.Router();

router.post("/", loginAccess, (req, res) => {
  res.status(200).json({ login: "logged in" });
});

// router.get("/", async (req, res) => {
//   res.status(200).json({ hello: "hello" });
// });
module.exports = router;
