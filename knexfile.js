module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'raquet'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
