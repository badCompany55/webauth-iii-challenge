const express = require("express");
const db = require("../data/actions/user_actions.js");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await db.all_users();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
