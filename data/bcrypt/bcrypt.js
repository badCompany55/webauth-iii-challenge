const bcrypt = require("bcryptjs");

module.exports = {
  new_teacher_hash,
  login_hash_check
};

async function new_teacher_hash(input_pass, salt) {
  try {
    const theHash = await new Promise((res, rej) => {
      bcrypt.hash(input_pass, salt, function(err, hash) {
        if (err) rej(err);
        res(hash);
      });
    });
    return theHash;
  } catch (err) {
    console.log(err);
  }
}

async function login_hash_check(input_pass, user_pass) {
  try {
    const loginCheck = await new Promise((res, rej) => {
      bcrypt.compare(input_pass, user_pass, function(err, pass) {
        if (err) rej(err);
        res(pass);
      });
    });
    return loginCheck;
  } catch (err) {
    console.log(err);
  }
}
