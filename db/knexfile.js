// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: process.env.LOCAL_PG_DB,
      user:     process.env.LOCAL_PG_DB_USER,
      password: process.env.LOCAL_PG_DB_PW,
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
