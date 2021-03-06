module.exports = {
  env: 'production',

  database: {
    connection: 'mongodb://mongo:27017/production',
    transactions: false,
  },

  email: {
    comment: 'See https://nodemailer.com',
    from: '<insert your email here>',
    host: null,
    auth: {
      user: null,
      pass: null,
    },
  },

  graphiql: false,

  clientUrl:
    '<insert client url here>',

  defaultUser: null,

  uploadDir: '/storage',

  authJwtSecret: 'dd2a462b-8042-4e4e-be33-34e03b2c7652',
};
