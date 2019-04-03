exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", tb => {
    tb.increments();
    tb.string("use_name", 50)
      .notNullable()
      .unique();
    tb.string("use_passw")
      .notNullable()
      .unique();
    tb.integer("use_dep_key")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("departments");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
