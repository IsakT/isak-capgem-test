require('dotenv').config({path: '../.env'});
// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: process.env.DEV_PG_DB,
      user:     process.env.DEV_PG_DB_USER,
      password: process.env.DEV_PG_DB_PW,
      port: process.env.DEV_PG_DB_HOST
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      host: process.env.RDS_PG_HOST,
      database: process.env.RDS_PG_DB,
      user:     process.env.RDS_PG_DB_USER,
      password: process.env.RDS_PG_DB_PW,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
