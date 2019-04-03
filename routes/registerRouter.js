const express = require("express");
const bcryptFile = require("../data/bcrypt/bcrypt.js");
const db = require("../data/actions/user_actions.js");

const router = express.Router();
const theHash = bcryptFile.theHash;

router.post("/", async (req, res) => {
  const creds = req.body;
  const { use_name, use_passw, use_dep_key } = req.body;
  if (use_name && use_passw && use_dep_key) {
    const newPass = await theHash(use_passw, 10);
    creds.use_passw = newPass;
    try {
      const newUser = await db.add_user(creds);
      res.status(201).json(newUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res
      .status(400)
      .json({ Error: "Name, password and departement id are required" });
  }
});

module.exports = router;
