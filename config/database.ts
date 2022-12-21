export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'partha'),
      user: env('DATABASE_USERNAME', 'partha7'),
      password: env('DATABASE_PASSWORD', 'paulteli'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
