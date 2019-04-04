const db = require("../knexConfig.js");

module.exports = {
  get_all_teachers,
  get_single_teacher,
  add_new_teacher
};

function get_all_teachers() {
  return db("teachers");
}

function get_single_teacher(name) {
  return db("teachers")
    .where("tea_name", name)
    .first();
}

function add_new_teacher(teacher) {
  console.log(teacher);
  return db("teachers").insert(teacher);
}
