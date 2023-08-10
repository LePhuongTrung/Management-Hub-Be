export const appConfig = {
  port: process.env.PORT || 3000,
  environment: process.env.NODE_ENV || 'development',

  jwt: {
    secret: process.env.JWT_SECRET || 'default_secret',
    expiresIn: process.env.JWT_EXPIRATION || '1h',
  },

  // rateLimit: {
  //   windowMs: 15 * 60 * 1000,
  //   max: 100,
  // },

  cors: {
    origin: process.env.CORS_ORIGIN || '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  },

  logging: {
    level: process.env.LOG_LEVEL || 'info',
  },
};
