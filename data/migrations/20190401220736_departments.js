exports.up = function(knex, Promise) {
  return knex.schema.createTable("departments", tb => {
    tb.increments();
    tb.string("dep_name")
      .notNullable()
      .unique();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("departments");
};
