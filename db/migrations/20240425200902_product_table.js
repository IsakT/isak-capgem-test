const { table } = require("../db");

/**
 * Creates the 'product' table
 */

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTableIfNotExists("product", (product) => {
    table.increments("id");
    table.string("name").notNullable();
    table.decimal("price").notNullable();
    table.json("articles"); // store in db as json, convert to array in app
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
