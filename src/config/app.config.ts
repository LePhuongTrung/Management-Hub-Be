interface Config {
  cors: {
    methods: string;
    origin: string;
  };
  environment: string;
  jwt: {
    expiresIn: string;
    secret: string;
  };
  logging: {
    level: string;
  };
  port: string | number;
}

export default (): Config => ({
  cors: {
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    origin: 'http://localhost:3000',
  },
  environment: process.env.NODE_ENV || 'development',
  jwt: {
    expiresIn: '1h',
    secret: process.env.JWT_SECRET || 'secretKey',
  },
  logging: {
    level: process.env.LOG_LEVEL || 'info',
  },
  port: process.env.PORT || 3000,
});
