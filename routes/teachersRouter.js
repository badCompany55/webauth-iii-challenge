const express = require("express");
const db = require("../data/db_actions/db_actions.js");
const restricted = require("../middleware/middleware.js").token_authorize;

const router = express.Router();

router.get("/", restricted, async (req, res) => {
  try {
    const teachers = await db.get_all_teachers();
    res.status(200).json(teachers);
  } catch (err) {
    res.status(500).json({ Error: "Failed to retrieve Teachers" });
  }
});

module.exports = router;
