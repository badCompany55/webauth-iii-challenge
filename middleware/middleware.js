const jwt = require("jsonwebtoken");
const jwtSecret = require("../config/secret.js").jwtSecret;

module.exports = {
  generate_token,
  token_authorize
};

function generate_token(teacher) {
  const payload = {
    subject: teacher.id,
    username: teacher.tea_name
  };
  const options = {
    expiresIn: "1d"
  };

  return jwt.sign(payload, jwtSecret, options);
}

function token_authorize(req, res, next) {
  const token = req.headers.authorization;
  console.log(req.headers);
  token
    ? jwt.verify(token, jwtSecret, (err, decodedToken) => {
        err ? res.status(401).json({ err: "user not verified" }) : next();
      })
    : res.status(401).json({ err: "user not verified" });
}
