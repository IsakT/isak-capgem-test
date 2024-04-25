const { table } = require("../db");

/**
 * Creates the 'article' table
 */

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTableIfNotExists("article", (article) => {
    table.increments("id");
    table.string("art_id").notNullable();
    table.string("name").notNullable();
    table.decimal("stock").notNullable();
    table.timestamps(true, true);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("product");
};
