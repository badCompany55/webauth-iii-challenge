exports.up = function(knex, Promise) {
  return knex.schema.createTable("teachers", tb => {
    tb.increments();
    tb.string("tea_name", 128)
      .notNullable()
      .unique();
    tb.string("tea_passw").notNullable();
    tb.integer("tea_dep_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("departments")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("teachers");
};
