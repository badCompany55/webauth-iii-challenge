const express = require("express");
const bcrypt = require("../data/bcrypt/bcrypt.js");
const db = require("../data/db_actions/db_actions.js");

const router = express.Router();

router.post("/", async (req, res) => {
  const { tea_name, tea_passw, tea_dep_id } = req.body;
  const creds = req.body;
  if (tea_name && tea_passw && tea_dep_id) {
    try {
      const hashed = await bcrypt.new_teacher_hash(tea_passw, 15);
      creds.tea_passw = hashed;
      const insertTeacher = await db.add_new_teacher(creds);
      res.status(201).json(insertTeacher);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res
      .status(401)
      .json({ Error: "The name, password, and department id are required" });
  }
});
module.exports = router;
