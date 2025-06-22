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
      url: process.env.DATABASE_URL,
    },
  };
};
