const jwt = require("jsonwebtoken");

module.exports = {
  jwtSecret: "akkjoejnvjkfjkghera;jkd",
  tokenGenerator
};

async function tokenGenerator(user) {
  const payload = {
    subject: user.id,
    username: user.use_name
  };
  const options = {
    expiresIn: "1d"
  };
  const secret = "akkjoejnvjkfjkghera;jkd";
  const thetoken = new Promise((res, rej) => {
    jwt.sign(payload, secret, options, function(err, token) {
      if (err) rej(err);
      res(token);
    });
  });
  return thetoken;
}
