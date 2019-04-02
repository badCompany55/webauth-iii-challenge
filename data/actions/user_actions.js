const db = require("../knexConfig.js");

module.exports = {
  all_users,
  single_user,
  add_user
};

function all_users() {
  return db("users");
}

function single_user(id) {
  return db
    .from("users")
    .innerJoin("departments", "use_dep_key", "departments.id");
}

function add_user(user) {
  return db("users").insert(user);
}
