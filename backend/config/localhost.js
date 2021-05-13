const os = require('os');

module.exports = {
  env: '127.0.0.1',

  database: {
    // connection:
    //   'mongodb://localhost:27017,localhost:27018,localhost:27019/development?replicaSet=rs',
    // transactions: true,
    connection: 'mongodb://127.0.0.1:27017/development',
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

  clientUrl: 'mongodb://127.0.0.1:27017',

  defaultUser: null,

  uploadDir: '/storage',

  authJwtSecret: 'ead3706d-2f3e-4063-b00c-4d01d4cb91c4',
};
