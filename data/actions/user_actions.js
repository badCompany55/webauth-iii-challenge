const db = require("../knexConfig.js");

module.exports = {
  all_users,
  single_user,
  add_user
};

function all_users() {
  return db("users");
}

function single_user(name) {
  return db("users")
    .where("use_name", name)
    .first();
}

function add_user(user) {
  return db("users").insert(user);
}
