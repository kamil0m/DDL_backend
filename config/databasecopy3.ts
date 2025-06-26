export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      connectionString: env('DATABASE_URL'),
      ssl: env('DATABASE_URL') && (
        env('DATABASE_URL').includes('amazonaws.com') || 
        env('DATABASE_URL').includes('heroku') ||
        env('DATABASE_URL').includes('postgres://')
      ) ? {
        rejectUnauthorized: false // Required for Heroku Postgres and AWS RDS
      } : false, // Disable SSL for localhost only
    },
    pool: {
      min: 0,
      max: 5, // Lower max connections for development
      acquireTimeoutMillis: 30000,
      createTimeoutMillis: 15000,
      destroyTimeoutMillis: 5000,
      idleTimeoutMillis: 30000,
      reapIntervalMillis: 1000,
      createRetryIntervalMillis: 200,
    },
    debug: env('NODE_ENV') === 'development', // Enable debug in development
  },
});