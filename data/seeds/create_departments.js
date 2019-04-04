exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("departments")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("departments").insert([
        { dep_name: "DataScience" },
        { dep_name: "Web Development" },
        { dep_name: "Backend Programming" }
      ]);
    });
};
