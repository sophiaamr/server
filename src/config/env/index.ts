import 'dotenv/config';
export default () => {
  return {
    application: {
      port: process.env.PORT || 3000,
      jwt: {
        secret: process.env.NEXTAUTH_SECRET,
      },
    },
    database: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      name: process.env.DB_DATABASE,
    },
  };
};
