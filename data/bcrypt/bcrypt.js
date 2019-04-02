const bcrypt = require("bcryptjs");

module.exports = {
  theHash,
  bcryptLogin
};

async function theHash(pass, salt) {
  try {
    const newHash = await new Promise((res, rej) => {
      bcrypt.hash(pass, salt, function(err, hash) {
        if (err) rej(err);
        res(hash);
      });
    });
    return newHash;
  } catch (err) {
    console.log(err);
  }
}

async function bcryptLogin(pass_word, user_pass_word) {
  try {
    const check = await new Promise((res, rej) => {
      bcrypt.compare(pass_word, user_pass_word, function(err, login) {
        if (err) rej(err);
        res(login);
      });
    });
    // console.log(check);
    return check;
  } catch (err) {
    console.log(err);
  }
}
