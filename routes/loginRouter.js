const express = require("express");
const bcrypt = require("../data/bcrypt/bcrypt.js");
const db = require("../data/db_actions/db_actions.js");
const jwt = require("../middleware/middleware.js");

const router = express.Router();

router.post("/", async (req, res) => {
  const { tea_name, tea_passw } = req.body;
  const creds = req.body;
  if (tea_name && tea_passw) {
    try {
      const teacher = await db.get_single_teacher(tea_name);
      if (teacher) {
        const login = await bcrypt.login_hash_check(
          tea_passw,
          teacher.tea_passw
        );
        if (login == true) {
          const token = jwt.generate_token(teacher);
          res.status(200).json(token);
        } else {
          res.status(401).json({ Error: "Invalid Credentials" });
        }
      } else {
        res.status(400).json({ Message: "Teacher does not exist" });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(400).json({ Error: "The name and password are required" });
  }
});

module.exports = router;
