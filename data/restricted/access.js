const bcryptLogin = require("../bcrypt/bcrypt.js").bcryptLogin;
const db = require("../actions/user_actions.js");
const tokenGenerator = require("../token/token.js").tokenGenerator;
const jwtSecret = require("../token/token.js").jwtSecret;
const jwt = require("jsonwebtoken");

module.exports = {
  loginAccess,
  restrictedAccess
};

async function loginAccess(req, res, next) {
  const { use_name, use_passw } = req.body;
  try {
    const theUser = await db.single_user(use_name);
    if (theUser && (await bcryptLogin(use_passw, theUser.use_passw)) == true) {
      const newToken = await tokenGenerator(theUser);
      console.log(newToken);
      next();
    } else {
      res.status(401).json({ Error: "Invalid Credentials" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
}

function restrictedAccess(req, res, next) {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, jwtSecret, (err, decodeToken) => {
      if (err) {
        res.status(400).json({ Error: "Not Verified" });
      } else {
        next();
      }
    });
  } else {
    res.status(400).json({ Error: "Not authorized to access" });
  }
}
