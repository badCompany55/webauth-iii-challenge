const express = require("express");
const db = require("../data/actions/user_actions.js");
const restrictedAccess = require("../data/restricted/access.js")
  .restrictedAccess;
const router = express.Router();

router.get("/", restrictedAccess, async (req, res) => {
  try {
    const users = await db.all_users();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
