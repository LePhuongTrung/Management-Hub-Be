export default () => ({
  port: process.env.PORT || 3000,
  environment: process.env.NODE_ENV || 'development',
  jwt: {
    secret: process.env.JWT_SECRET || 'secretKey',
    expiresIn: '1h',
  },
  cors: {
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  },
  logging: {
    level: process.env.LOG_LEVEL || 'info',
  },
});
